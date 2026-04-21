import { usePuter } from "./puter.js";
import configuration from "./configuration.js";
import { problems } from "./problems.js";

const API_KEY = "";

const AUTH_HEADERS = API_KEY ? {
    "Authorization": `Bearer ${API_KEY}`
} : {};

const CE = "CE";
const EXTRA_CE = "EXTRA_CE";

const AUTHENTICATED_CE_BASE_URL = "https://ce.judge0.com";
const AUTHENTICATED_EXTRA_CE_BASE_URL = "https://extra-ce.judge0.com";

var AUTHENTICATED_BASE_URL = {};
AUTHENTICATED_BASE_URL[CE] = AUTHENTICATED_CE_BASE_URL;
AUTHENTICATED_BASE_URL[EXTRA_CE] = AUTHENTICATED_EXTRA_CE_BASE_URL;

const UNAUTHENTICATED_CE_BASE_URL = "https://ce.judge0.com";
const UNAUTHENTICATED_EXTRA_CE_BASE_URL = "https://extra-ce.judge0.com";

var UNAUTHENTICATED_BASE_URL = {};
UNAUTHENTICATED_BASE_URL[CE] = UNAUTHENTICATED_CE_BASE_URL;
UNAUTHENTICATED_BASE_URL[EXTRA_CE] = UNAUTHENTICATED_EXTRA_CE_BASE_URL;

const INITIAL_WAIT_TIME_MS = 0;
const WAIT_TIME_FUNCTION = i => 100;
const MAX_PROBE_REQUESTS = 600;

var fontSize = 13;

var layout;

export var sourceEditor;

var $selectLanguage;
var $compilerOptions;
var $commandLineArguments;
var $runBtn;
var $submitBtn;
var $statusLine;

var timeStart;

var sqliteAdditionalFiles;
var languages = {};

var layoutConfig = {
    settings: {
        showPopoutIcon: false,
        reorderEnabled: true
    },
    content: [{
        type: "row",
        content: [{
            type: "component",
            width: 30,
            componentName: "problem",
            id: "problem",
            title: "Problem",
            isClosable: false
        }, {
            type: "column",
            width: 70,
            content: [{
                type: "component",
                height: 60,
                componentName: "source",
                id: "source",
                title: "Source Code",
                isClosable: false,
                componentState: {
                    readOnly: false
                }
            }, {
                type: "stack",
                height: 40,
                content: [{
                    type: "component",
                    componentName: "testcase",
                    id: "testcase",
                    title: "Testcase",
                    isClosable: false
                }, {
                    type: "component",
                    componentName: "result",
                    id: "result",
                    title: "Test Result",
                    isClosable: false
                }]
            }]
        }]
    }]
};

var gPuterFile;

function encode(str) {
    return btoa(unescape(encodeURIComponent(str || "")));
}

function decode(bytes) {
    var escaped = escape(atob(bytes || ""));
    try {
        return decodeURIComponent(escaped);
    } catch {
        return unescape(escaped);
    }
}

function showError(title, content) {
    $("#judge0-site-modal #title").html(title);
    $("#judge0-site-modal .content").html(content);

    let reportTitle = encodeURIComponent(`Error on ${window.location.href}`);
    let reportBody = encodeURIComponent(
        `**Error Title**: ${title}\n` +
        `**Error Timestamp**: \`${new Date()}\`\n` +
        `**Origin**: ${window.location.href}\n` +
        `**Description**:\n${content}`
    );

    $("#report-problem-btn").attr("href", `https://github.com/judge0/ide/issues/new?title=${reportTitle}&body=${reportBody}`);
    $("#judge0-site-modal").modal("show");
}

function showHttpError(jqXHR) {
    showError(`${jqXHR.statusText} (${jqXHR.status})`, `<pre>${JSON.stringify(jqXHR, null, 4)}</pre>`);
}

function handleRunError(jqXHR) {
    showHttpError(jqXHR);
    $runBtn.removeClass("loading");

    window.top.postMessage(JSON.parse(JSON.stringify({
        event: "runError",
        data: jqXHR
    })), "*");
}

function handleResult(data, index, total, expectedOutput) {
    const tat = Math.round(performance.now() - timeStart);
    console.log(`It took ${tat}ms to get submission result for test case ${index + 1}.`);

    const status = data.status;
    const stdout = decode(data.stdout).trim();
    const compileOutput = decode(data.compile_output);
    const time = (data.time === null ? "-" : data.time + "s");
    const memory = (data.memory === null ? "-" : data.memory + "KB");

    const passed = status.id === 3 && stdout === expectedOutput.trim();

    if (!window.testResults) window.testResults = [];
    window.testResults[index] = {
        status: status,
        stdout: stdout,
        compileOutput: compileOutput,
        time: time,
        memory: memory,
        passed: passed,
        expectedOutput: expectedOutput
    };

    if (window.testResults.filter(r => r).length === total) {
        renderTestResults();
        $runBtn.removeClass("loading");
    }
}

function renderTestResults() {
    const $content = $("#test-result-content");
    $content.empty();

    const totalPassed = window.testResults.filter(r => r.passed).length;
    const total = window.testResults.length;

    const $summary = $(`
        <div class="ui message ${totalPassed === total ? 'positive' : 'negative'}">
            <div class="header">${totalPassed === total ? 'All Test Cases Passed!' : 'Some Test Cases Failed'}</div>
            <p>${totalPassed} / ${total} test cases passed.</p>
        </div>
    `);
    $content.append($summary);

    const $tabs = $(`<div class="ui mini secondary pointing menu result-case-tabs"></div>`);
    const $panes = $(`<div class="result-case-panes"></div>`);

    window.testResults.forEach((result, index) => {
        const tabName = `result-case-${index + 1}`;
        const $tab = $(`<a class="item ${index === 0 ? 'active' : ''}" data-tab="${tabName}">Case ${index + 1} <i class="${result.passed ? 'check green' : 'close red'} icon"></i></a>`);
        $tabs.append($tab);

        const $pane = $(`
            <div class="ui tab ${index === 0 ? 'active' : ''}" data-tab="${tabName}">
                <div class="result-detail">
                    <div class="status ${result.passed ? 'passed' : 'failed'}">${result.status.description}</div>
                    ${result.compileOutput ? `<div class="compile-output"><pre>${result.compileOutput}</pre></div>` : ""}
                    <div class="ui grid">
                        <div class="eight wide column">
                            <label>Actual Output</label>
                            <pre class="output-box">${result.stdout || "(empty)"}</pre>
                        </div>
                        <div class="eight wide column">
                            <label>Expected Output</label>
                            <pre class="output-box">${result.expectedOutput}</pre>
                        </div>
                    </div>
                    <div class="meta">Time: ${result.time}, Memory: ${result.memory}</div>
                </div>
            </div>
        `);
        $panes.append($pane);
    });

    $content.append($tabs);
    $content.append($panes);
    $(".result-case-tabs .item").tab();

    let x = layout.root.getItemsById("result")[0];
    x.parent.header.parent.setActiveContentItem(x);
}

async function getSelectedLanguage() {
    return getLanguage(getSelectedLanguageFlavor(), getSelectedLanguageId())
}

function getSelectedLanguageId() {
    return parseInt($selectLanguage.val());
}

function getSelectedLanguageFlavor() {
    return $selectLanguage.find(":selected").attr("flavor");
}

function run() {
    if (sourceEditor.getValue().trim() === "") {
        showError("Error", "Source code can't be empty!");
        return;
    } else {
        $runBtn.addClass("loading");
    }

    $("#test-result-content").html(`
        <div class="ui active centered inline loader"></div>
        <div style="text-align: center; margin-top: 10px;">Running test cases...</div>
    `);

    let x = layout.root.getItemsById("result")[0];
    x.parent.header.parent.setActiveContentItem(x);

    const testCases = [];
    $(".testcase-panes .tab").each(function(index) {
        testCases.push({
            input: $(this).find(".testcase-input").val(),
            expectedOutput: "" // We will try to get this from the current problem
        });
    });

    const activeProblemId = $(".problem-item.active").data("id");
    const activeProblem = problems.find(p => p.id === activeProblemId);
    if (activeProblem && activeProblem.test_cases) {
        testCases.forEach((tc, i) => {
            if (activeProblem.test_cases[i]) {
                tc.expectedOutput = activeProblem.test_cases[i].expected_output;
            }
        });
    }

    window.testResults = new Array(testCases.length).fill(null);

    testCases.forEach((tc, index) => {
        runTestCase(tc, index, testCases.length);
    });
}

function runTestCase(tc, index, total) {
    let sourceValue = encode(sourceEditor.getValue());
    let stdinValue = encode(tc.input);
    let languageId = getSelectedLanguageId();
    let compilerOptions = $compilerOptions.val();
    let commandLineArguments = $commandLineArguments.val();
    let flavor = getSelectedLanguageFlavor();

    if (languageId === 44) {
        sourceValue = sourceEditor.getValue();
    }

    let data = {
        source_code: sourceValue,
        language_id: languageId,
        stdin: stdinValue,
        compiler_options: compilerOptions,
        command_line_arguments: commandLineArguments,
        redirect_stderr_to_stdout: true
    };

    timeStart = performance.now();
    $.ajax({
        url: `${AUTHENTICATED_BASE_URL[flavor]}/submissions?base64_encoded=true&wait=false`,
        type: "POST",
        contentType: "application/json",
        data: JSON.stringify(data),
        headers: AUTH_HEADERS,
        success: function (data, textStatus, request) {
            let region = request.getResponseHeader('X-Judge0-Region');
            setTimeout(fetchSubmission.bind(null, flavor, region, data.token, 1, index, total, tc.expectedOutput), INITIAL_WAIT_TIME_MS);
        },
        error: handleRunError
    });
}

function fetchSubmission(flavor, region, submission_token, iteration, index, total, expectedOutput) {
    if (iteration >= MAX_PROBE_REQUESTS) {
        handleRunError({
            statusText: "Maximum number of probe requests reached.",
            status: 504
        }, null, null);
        return;
    }

    $.ajax({
        url: `${UNAUTHENTICATED_BASE_URL[flavor]}/submissions/${submission_token}?base64_encoded=true`,
        headers: {
            "X-Judge0-Region": region
        },
        success: function (data) {
            if (data.status.id <= 2) { // In Queue or Processing
                $statusLine.html(data.status.description);
                setTimeout(fetchSubmission.bind(null, flavor, region, submission_token, iteration + 1, index, total, expectedOutput), WAIT_TIME_FUNCTION(iteration));
            } else {
                handleResult(data, index, total, expectedOutput);
            }
        },
        error: handleRunError
    });
}

function setSourceCodeName(name) {
    const items = layout.root.getItemsById("source");
    if (items.length > 0) {
        items[0].setTitle(name);
    }
}

function getSourceCodeName() {
    const items = layout.root.getItemsById("source");
    return items.length > 0 ? items[0].config.title : "main.cpp";
}

function openFile(content, filename) {
    clear();
    sourceEditor.setValue(content);
    selectLanguageForExtension(filename.split(".").pop());
    setSourceCodeName(filename);
}

function saveFile(content, filename) {
    const blob = new Blob([content], { type: "text/plain" });
    const link = document.createElement("a");
    link.href = URL.createObjectURL(blob);
    link.download = filename;
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
    URL.revokeObjectURL(link.href);
}

async function openAction() {
    if (usePuter()) {
        gPuterFile = await puter.ui.showOpenFilePicker();
        openFile(await (await gPuterFile.read()).text(), gPuterFile.name);
    } else {
        document.getElementById("open-file-input").click();
    }
}

async function saveAction() {
    if (usePuter()) {
        if (gPuterFile) {
            gPuterFile.write(sourceEditor.getValue());
        } else {
            gPuterFile = await puter.ui.showSaveFilePicker(sourceEditor.getValue(), getSourceCodeName());
            setSourceCodeName(gPuterFile.name);
        }
    } else {
        saveFile(sourceEditor.getValue(), getSourceCodeName());
    }
}

function setFontSizeForAllEditors(fontSize) {
    sourceEditor.updateOptions({ fontSize: fontSize });
}

async function loadLangauges() {
    return new Promise((resolve, reject) => {
        let options = [];

        $.ajax({
            url: UNAUTHENTICATED_CE_BASE_URL + "/languages",
            success: function (data) {
                for (let i = 0; i < data.length; i++) {
                    let language = data[i];
                    let option = new Option(language.name, language.id);
                    option.setAttribute("flavor", CE);
                    option.setAttribute("langauge_mode", getEditorLanguageMode(language.name));

                    if (language.id !== 89) {
                        options.push(option);
                    }

                    if (language.id === DEFAULT_LANGUAGE_ID) {
                        option.selected = true;
                    }
                }
            },
            error: reject
        }).always(function () {
            $.ajax({
                url: UNAUTHENTICATED_EXTRA_CE_BASE_URL + "/languages",
                success: function (data) {
                    for (let i = 0; i < data.length; i++) {
                        let language = data[i];
                        let option = new Option(language.name, language.id);
                        option.setAttribute("flavor", EXTRA_CE);
                        option.setAttribute("langauge_mode", getEditorLanguageMode(language.name));

                        if (options.findIndex((t) => (t.text === option.text)) === -1 && language.id !== 89) {
                            options.push(option);
                        }
                    }
                },
                error: reject
            }).always(function () {
                options.sort((a, b) => a.text.localeCompare(b.text));
                $selectLanguage.append(options);
                resolve();
            });
        });
    });
};

async function loadSelectedLanguage(skipSetDefaultSourceCodeName = false) {
    monaco.editor.setModelLanguage(sourceEditor.getModel(), $selectLanguage.find(":selected").attr("langauge_mode"));

    if (!skipSetDefaultSourceCodeName) {
        setSourceCodeName((await getSelectedLanguage()).source_file);
    }
}

function selectLanguageByFlavorAndId(languageId, flavor) {
    let option = $selectLanguage.find(`[value=${languageId}][flavor=${flavor}]`);
    if (option.length) {
        option.prop("selected", true);
        $selectLanguage.trigger("change", { skipSetDefaultSourceCodeName: true });
    }
}

function selectLanguageForExtension(extension) {
    let language = getLanguageForExtension(extension);
    selectLanguageByFlavorAndId(language.language_id, language.flavor);
}

async function getLanguage(flavor, languageId) {
    return new Promise((resolve, reject) => {
        if (languages[flavor] && languages[flavor][languageId]) {
            resolve(languages[flavor][languageId]);
            return;
        }

        $.ajax({
            url: `${UNAUTHENTICATED_BASE_URL[flavor]}/languages/${languageId}`,
            success: function (data) {
                if (!languages[flavor]) {
                    languages[flavor] = {};
                }

                languages[flavor][languageId] = data;
                resolve(data);
            },
            error: reject
        });
    });
}

function setDefaults() {
    setFontSizeForAllEditors(fontSize);
    sourceEditor.setValue(DEFAULT_SOURCE);
    $compilerOptions.val(DEFAULT_COMPILER_OPTIONS);
    $commandLineArguments.val(DEFAULT_CMD_ARGUMENTS);

    $statusLine.html("");

    loadSelectedLanguage();
}

function clear() {
    sourceEditor.setValue("");
    $compilerOptions.val("");
    $commandLineArguments.val("");

    $statusLine.html("");
}

function refreshSiteContentHeight() {
    const navigationHeight = document.getElementById("judge0-site-navigation").offsetHeight;

    const siteContent = document.getElementById("judge0-site-content");
    siteContent.style.height = `${window.innerHeight}px`;
    siteContent.style.paddingTop = `${navigationHeight}px`;
}

function refreshLayoutSize() {
    refreshSiteContentHeight();
    layout.updateSize();
}

window.addEventListener("resize", refreshLayoutSize);
document.addEventListener("DOMContentLoaded", async function () {
    $(".ui.selection.dropdown").dropdown();
    $("[data-content]").popup({
        lastResort: "left center"
    });

    refreshSiteContentHeight();

    console.log("Hey, Judge0 IDE is open-sourced: https://github.com/judge0/ide. Have fun!");

    $selectLanguage = $("#select-language");
    $selectLanguage.change(function (event, data) {
        let skipSetDefaultSourceCodeName = (data && data.skipSetDefaultSourceCodeName) || !!gPuterFile;
        loadSelectedLanguage(skipSetDefaultSourceCodeName);
    });

    await loadLangauges();

    $compilerOptions = $("#compiler-options");
    $commandLineArguments = $("#command-line-arguments");

    $runBtn = $("#run-btn");
    $runBtn.click(run);

    $submitBtn = $("#submit-btn");
    $submitBtn.click(run);

    const $problemListDrawer = $("#judge0-problem-list-drawer");
    const $problemListItems = $("#problem-list-items");
    const $closeDrawerBtn = $("#close-drawer-btn");
    const $problemListBtn = $(".problem-list-btn");
    const $drawerSearch = $(".drawer-search input");

    function renderProblemList(filter = "") {
        $problemListItems.empty();
        problems.filter(p => p.title.toLowerCase().includes(filter.toLowerCase()))
            .forEach(problem => {
                const $item = $(`
                    <div class="problem-item" data-id="${problem.id}">
                        <div class="title">${problem.id}. ${problem.title}</div>
                        <div class="meta">
                            <span class="difficulty-${problem.difficulty.toLowerCase()}">${problem.difficulty}</span>
                            <span class="tags">${problem.tags.join(", ")}</span>
                        </div>
                    </div>
                `);
                $item.click(() => {
                    loadProblem(problem);
                    $problemListDrawer.removeClass("show");
                });
                $problemListItems.append($item);
            });
    }

    function loadProblem(problem) {
        const $container = $("#judge0-problem-container");
        $container.find("h1").text(`${problem.id}. ${problem.title}`);

        const $tags = $container.find(".problem-tags");
        $tags.empty();
        $tags.append(`<span class="ui tiny ${problem.difficulty === 'Easy' ? 'green' : problem.difficulty === 'Medium' ? 'orange' : 'red'} label">${problem.difficulty}</span>`);
        problem.tags.forEach(tag => {
            $tags.append(`<span class="ui tiny label">${tag}</span>`);
        });

        $container.find(".problem-content").html(problem.description);

        const $examples = $container.find(".problem-examples");
        $examples.empty();
        if (problem.examples) {
            problem.examples.forEach((example, index) => {
                const $example = $(`
                    <div class="problem-example">
                        <h4>Example ${index + 1}:</h4>
                        <div class="example-box">
                            <div><strong>Input:</strong> <code>${example.input}</code></div>
                            <div><strong>Output:</strong> <code>${example.output}</code></div>
                            ${example.explanation ? `<div><strong>Explanation:</strong> ${example.explanation}</div>` : ""}
                        </div>
                    </div>
                `);
                $examples.append($example);
            });
        }

        $(".problem-item").removeClass("active");
        $(`.problem-item[data-id="${problem.id}"]`).addClass("active");

        // Reset tabs
        $(".problem-tabs .item").tab();
        $(".problem-tabs .item").first().click();

        // Load test cases
        const $testcaseTabs = $(".testcase-tabs");
        const $testcasePanes = $(".testcase-panes");
        $testcaseTabs.find(".item:not(.add-testcase)").remove();
        $testcasePanes.empty();

        if (problem.test_cases) {
            problem.test_cases.forEach((tc, index) => {
                const tabName = `case-${index + 1}`;
                const $tab = $(`<a class="item ${index === 0 ? 'active' : ''}" data-tab="${tabName}">Case ${index + 1}</a>`);
                $testcaseTabs.find(".add-testcase").before($tab);

                const $pane = $(`
                    <div class="ui tab ${index === 0 ? 'active' : ''}" data-tab="${tabName}">
                        <div class="testcase-input-group">
                            <label>Input</label>
                            <textarea class="testcase-input">${tc.input}</textarea>
                        </div>
                    </div>
                `);
                $testcasePanes.append($pane);
            });
            $(".testcase-tabs .item").tab();
        }
    }

    $problemListBtn.click(() => $problemListDrawer.toggleClass("show"));
    $closeDrawerBtn.click(() => $problemListDrawer.removeClass("show"));
    $drawerSearch.on("input", (e) => renderProblemList($(e.target).val()));

    renderProblemList();
    if (problems.length > 0) {
        loadProblem(problems[0]);
    }

    $(document).on("click", ".add-testcase", function() {
        const index = $(".testcase-tabs .item:not(.add-testcase)").length + 1;
        const tabName = `case-${index}`;
        const $tab = $(`<a class="item" data-tab="${tabName}">Case ${index}</a>`);
        $(".testcase-tabs .add-testcase").before($tab);

        const $pane = $(`
            <div class="ui tab" data-tab="${tabName}">
                <div class="testcase-input-group">
                    <div class="input-label">input =</div>
                    <textarea class="testcase-input" spellcheck="false"></textarea>
                </div>
            </div>
        `);
        $(".testcase-panes").append($pane);
        $(".testcase-tabs .item").tab();
        $tab.click();
    });

    $("#open-file-input").change(function (e) {
        const selectedFile = e.target.files[0];
        if (selectedFile) {
            const reader = new FileReader();
            reader.onload = function (e) {
                openFile(e.target.result, selectedFile.name);
            };

            reader.onerror = function (e) {
                showError("Error", "Error reading file: " + e.target.error);
            };

            reader.readAsText(selectedFile);
        }
    });

    $statusLine = $("#judge0-status-line");

    $(document).on("keydown", "body", function (e) {
        if (e.metaKey || e.ctrlKey) {
            switch (e.key) {
                case "Enter":
                    e.preventDefault();
                    run();
                    break;
                case "s":
                    e.preventDefault();
                    saveAction();
                    break;
                case "o":
                    e.preventDefault();
                    openAction();
                    break;
                case "+":
                case "=":
                    e.preventDefault();
                    fontSize += 1;
                    setFontSizeForAllEditors(fontSize);
                    break;
                case "-":
                    e.preventDefault();
                    fontSize -= 1;
                    setFontSizeForAllEditors(fontSize);
                    break;
                case "0":
                    e.preventDefault();
                    fontSize = 13;
                    setFontSizeForAllEditors(fontSize);
                    break;
                case "`":
                    e.preventDefault();
                    sourceEditor.focus();
                    break;
            }
        }
    });

    require(["vs/editor/editor.main"], function (ignorable) {
        layout = new GoldenLayout(layoutConfig, $("#judge0-site-content"));

        layout.registerComponent("problem", function (container, state) {
            const problemContainer = document.getElementById("judge0-problem-container");
            if (problemContainer) {
                container.getElement()[0].appendChild(problemContainer);
                problemContainer.classList.remove("judge0-hidden");
            }
        });

        layout.registerComponent("source", function (container, state) {
            sourceEditor = monaco.editor.create(container.getElement()[0], {
                automaticLayout: true,
                scrollBeyondLastLine: true,
                readOnly: state.readOnly,
                language: "cpp",
                minimap: {
                    enabled: true
                }
            });

            sourceEditor.addCommand(monaco.KeyMod.CtrlCmd | monaco.KeyCode.Enter, run);

            monaco.languages.registerInlineCompletionsProvider('*', {
                provideInlineCompletions: async (model, position) => {
                    if (!puter.auth.isSignedIn() || !document.getElementById("judge0-inline-suggestions").checked || !configuration.get("appOptions.showAIAssistant")) {
                        return;
                    }

                    const textBeforeCursor = model.getValueInRange({
                        startLineNumber: 1,
                        startColumn: 1,
                        endLineNumber: position.lineNumber,
                        endColumn: position.column
                    });

                    const textAfterCursor = model.getValueInRange({
                        startLineNumber: position.lineNumber,
                        startColumn: position.column,
                        endLineNumber: model.getLineCount(),
                        endColumn: model.getLineMaxColumn(model.getLineCount())
                    });

                    const aiResponse = await puter.ai.chat([{
                        role: "user",
                        content: `You are a code completion assistant. Given the following context, generate the most likely code completion.

                    ### Code Before Cursor:
                    ${textBeforeCursor}

                    ### Code After Cursor:
                    ${textAfterCursor}

                    ### Instructions:
                    - Predict the next logical code segment.
                    - Ensure the suggestion is syntactically and contextually correct.
                    - Keep the completion concise and relevant.
                    - Do not repeat existing code.
                    - Provide only the missing code.
                    - **Respond with only the code, without markdown formatting.**
                    - **Do not include triple backticks (\`\`\`) or additional explanations.**

                    ### Completion:`.trim()
                    }], {
                        model: document.getElementById("judge0-chat-model-select").value,
                    });

                    let aiResponseValue = aiResponse?.toString().trim() || "";

                    if (Array.isArray(aiResponseValue)) {
                        aiResponseValue = aiResponseValue.map(v => v.text).join("\n").trim();
                    }

                    if (!aiResponseValue || aiResponseValue.length === 0) {
                        return;
                    }

                    return {
                        items: [{
                            insertText: aiResponseValue,
                            range: new monaco.Range(
                                position.lineNumber,
                                position.column,
                                position.lineNumber,
                                position.column
                            )
                        }]
                    };
                },
                handleItemDidShow: () => { },
                freeInlineCompletions: () => { }
            });
        });

        layout.registerComponent("testcase", function (container, state) {
            const testcaseContainer = document.getElementById("judge0-testcase-container");
            if (testcaseContainer) {
                container.getElement()[0].appendChild(testcaseContainer);
                testcaseContainer.classList.remove("judge0-hidden");
            }
        });

        layout.registerComponent("result", function (container, state) {
            const resultContainer = document.getElementById("judge0-result-container");
            if (resultContainer) {
                container.getElement()[0].appendChild(resultContainer);
                resultContainer.classList.remove("judge0-hidden");
            }
        });

        layout.registerComponent("ai", function (container, state) {
            container.getElement()[0].appendChild(document.getElementById("judge0-chat-container"));
        });

        layout.on("initialised", function () {
            setDefaults();
            refreshLayoutSize();
            window.top.postMessage({ event: "initialised" }, "*");
        });

        layout.init();
    });

    let superKey = "⌘";
    if (!/(Mac|iPhone|iPod|iPad)/i.test(navigator.platform)) {
        superKey = "Ctrl";
    }

    [$runBtn].forEach(btn => {
        btn.attr("data-content", `${superKey}${btn.attr("data-content")}`);
    });

    document.querySelectorAll(".description").forEach(e => {
        if (e) {
            e.innerText = `${superKey}${e.innerText}`;
        }
    });

    if (usePuter()) {
        puter.ui.onLaunchedWithItems(async function (items) {
            gPuterFile = items[0];
            openFile(await (await gPuterFile.read()).text(), gPuterFile.name);
        });
    }

    document.getElementById("judge0-open-file-btn").addEventListener("click", openAction);
    document.getElementById("judge0-save-btn").addEventListener("click", saveAction);

    window.onmessage = function (e) {
        if (!e.data) {
            return;
        }

        if (e.data.action === "get") {
            window.top.postMessage(JSON.parse(JSON.stringify({
                event: "getResponse",
                source_code: sourceEditor.getValue(),
                language_id: getSelectedLanguageId(),
                flavor: getSelectedLanguageFlavor(),
                stdin: $(".testcase-input").first().val(),
                stdout: "",
                compiler_options: $compilerOptions.val(),
                command_line_arguments: $commandLineArguments.val()
            })), "*");
        } else if (e.data.action === "set") {
            if (e.data.source_code) {
                sourceEditor.setValue(e.data.source_code);
            }
            if (e.data.language_id && e.data.flavor) {
                selectLanguageByFlavorAndId(e.data.language_id, e.data.flavor);
            }
            if (e.data.stdin) {
                $(".testcase-input").first().val(e.data.stdin);
            }
            if (e.data.compiler_options) {
                $compilerOptions.val(e.data.compiler_options);
            }
            if (e.data.command_line_arguments) {
                $commandLineArguments.val(e.data.command_line_arguments);
            }
            if (e.data.api_key) {
                AUTH_HEADERS["Authorization"] = `Bearer ${e.data.api_key}`;
            }
        } else if (e.data.action === "run") {
            run();
        }
    };
});

const DEFAULT_SOURCE = "\
#include <algorithm>\n\
#include <cstdint>\n\
#include <iostream>\n\
#include <limits>\n\
#include <set>\n\
#include <utility>\n\
#include <vector>\n\
\n\
using Vertex    = std::uint16_t;\n\
using Cost      = std::uint16_t;\n\
using Edge      = std::pair< Vertex, Cost >;\n\
using Graph     = std::vector< std::vector< Edge > >;\n\
using CostTable = std::vector< std::uint64_t >;\n\
\n\
constexpr auto kInfiniteCost{ std::numeric_limits< CostTable::value_type >::max() };\n\
\n\
auto dijkstra( Vertex const start, Vertex const end, Graph const & graph, CostTable & costTable )\n\
{\n\
    std::fill( costTable.begin(), costTable.end(), kInfiniteCost );\n\
    costTable[ start ] = 0;\n\
\n\
    std::set< std::pair< CostTable::value_type, Vertex > > minHeap;\n\
    minHeap.emplace( 0, start );\n\
\n\
    while ( !minHeap.empty() )\n\
    {\n\
        auto const vertexCost{ minHeap.begin()->first  };\n\
        auto const vertex    { minHeap.begin()->second };\n\
\n\
        minHeap.erase( minHeap.begin() );\n\
\n\
        if ( vertex == end )\n\
        {\n\
            break;\n\
        }\n\
\n\
        for ( auto const & neighbourEdge : graph[ vertex ] )\n\
        {\n\
            auto const & neighbour{ neighbourEdge.first };\n\
            auto const & cost{ neighbourEdge.second };\n\
\n\
            if ( costTable[ neighbour ] > vertexCost + cost )\n\
            {\n\
                minHeap.erase( { costTable[ neighbour ], neighbour } );\n\
                costTable[ neighbour ] = vertexCost + cost;\n\
                minHeap.emplace( costTable[ neighbour ], neighbour );\n\
            }\n\
        }\n\
    }\n\
\n\
    return costTable[ end ];\n\
}\n\
\n\
int main()\n\
{\n\
    constexpr std::uint16_t maxVertices{ 10000 };\n\
\n\
    Graph     graph    ( maxVertices );\n\
    CostTable costTable( maxVertices );\n\
\n\
    std::uint16_t testCases;\n\
    std::cin >> testCases;\n\
\n\
    while ( testCases-- > 0 )\n\
    {\n\
        for ( auto i{ 0 }; i < maxVertices; ++i )\n\
        {\n\
            graph[ i ].clear();\n\
        }\n\
\n\
        std::uint16_t numberOfVertices;\n\
        std::uint16_t numberOfEdges;\n\
\n\
        std::cin >> numberOfVertices >> numberOfEdges;\n\
\n\
        for ( auto i{ 0 }; i < numberOfEdges; ++i )\n\
        {\n\
            Vertex from;\n\
            Vertex to;\n\
            Cost   cost;\n\
\n\
            std::cin >> from >> to >> cost;\n\
            graph[ from ].emplace_back( to, cost );\n\
        }\n\
\n\
        Vertex start;\n\
        Vertex end;\n\
\n\
        std::cin >> start >> end;\n\
\n\
        auto const result{ dijkstra( start, end, graph, costTable ) };\n\
\n\
        if ( result == kInfiniteCost )\n\
        {\n\
            std::cout << \"NO\\n\";\n\
        }\n\
        else\n\
        {\n\
            std::cout << result << '\\n';\n\
        }\n\
    }\n\
\n\
    return 0;\n\
}\n\
";

const DEFAULT_STDIN = "\
3\n\
3 2\n\
1 2 5\n\
2 3 7\n\
1 3\n\
3 3\n\
1 2 4\n\
1 3 7\n\
2 3 1\n\
1 3\n\
3 1\n\
1 2 4\n\
1 3\n\
";

const DEFAULT_COMPILER_OPTIONS = "";
const DEFAULT_CMD_ARGUMENTS = "";
const DEFAULT_LANGUAGE_ID = 105; // C++ (GCC 14.1.0) (https://ce.judge0.com/languages/105)

function getEditorLanguageMode(languageName) {
    const DEFAULT_EDITOR_LANGUAGE_MODE = "plaintext";
    const LANGUAGE_NAME_TO_LANGUAGE_EDITOR_MODE = {
        "Bash": "shell",
        "C": "c",
        "C3": "c",
        "C#": "csharp",
        "C++": "cpp",
        "Clojure": "clojure",
        "F#": "fsharp",
        "Go": "go",
        "Java": "java",
        "JavaScript": "javascript",
        "Kotlin": "kotlin",
        "Objective-C": "objective-c",
        "Pascal": "pascal",
        "Perl": "perl",
        "PHP": "php",
        "Python": "python",
        "R": "r",
        "Ruby": "ruby",
        "SQL": "sql",
        "Swift": "swift",
        "TypeScript": "typescript",
        "Visual Basic": "vb"
    }

    for (let key in LANGUAGE_NAME_TO_LANGUAGE_EDITOR_MODE) {
        if (languageName.toLowerCase().startsWith(key.toLowerCase())) {
            return LANGUAGE_NAME_TO_LANGUAGE_EDITOR_MODE[key];
        }
    }
    return DEFAULT_EDITOR_LANGUAGE_MODE;
}

const EXTENSIONS_TABLE = {
    "asm": { "flavor": CE, "language_id": 45 }, // Assembly (NASM 2.14.02)
    "c": { "flavor": CE, "language_id": 103 }, // C (GCC 14.1.0)
    "cpp": { "flavor": CE, "language_id": 105 }, // C++ (GCC 14.1.0)
    "cs": { "flavor": EXTRA_CE, "language_id": 29 }, // C# (.NET Core SDK 7.0.400)
    "go": { "flavor": CE, "language_id": 95 }, // Go (1.18.5)
    "java": { "flavor": CE, "language_id": 91 }, // Java (JDK 17.0.6)
    "js": { "flavor": CE, "language_id": 102 }, // JavaScript (Node.js 22.08.0)
    "lua": { "flavor": CE, "language_id": 64 }, // Lua (5.3.5)
    "pas": { "flavor": CE, "language_id": 67 }, // Pascal (FPC 3.0.4)
    "php": { "flavor": CE, "language_id": 98 }, // PHP (8.3.11)
    "py": { "flavor": EXTRA_CE, "language_id": 25 }, // Python for ML (3.11.2)
    "r": { "flavor": CE, "language_id": 99 }, // R (4.4.1)
    "rb": { "flavor": CE, "language_id": 72 }, // Ruby (2.7.0)
    "rs": { "flavor": CE, "language_id": 73 }, // Rust (1.40.0)
    "scala": { "flavor": CE, "language_id": 81 }, // Scala (2.13.2)
    "sh": { "flavor": CE, "language_id": 46 }, // Bash (5.0.0)
    "swift": { "flavor": CE, "language_id": 83 }, // Swift (5.2.3)
    "ts": { "flavor": CE, "language_id": 101 }, // TypeScript (5.6.2)
    "txt": { "flavor": CE, "language_id": 43 }, // Plain Text
};

function getLanguageForExtension(extension) {
    return EXTENSIONS_TABLE[extension] || { "flavor": CE, "language_id": 43 }; // Plain Text (https://ce.judge0.com/languages/43)
}
