import * as vscode from 'vscode';

export function activate(context: vscode.ExtensionContext) {
    const provider1 = vscode.languages.registerCompletionItemProvider('sasm', {

		provideCompletionItems(document: vscode.TextDocument, position: vscode.Position, token: vscode.CancellationToken, context: vscode.CompletionContext) {

			// a simple completion item which inserts `Hello World!`
			const simpleCompletion = new vscode.CompletionItem('data section');
            simpleCompletion.insertText = new vscode.SnippetString('data section');
            simpleCompletion.documentation = new vscode.MarkdownString("Section for variables.");

			// a completion item that inserts its text as snippet,
			// the `insertText`-property is a `SnippetString` which will be
			// honored by the editor.
			const snippetCompletion = new vscode.CompletionItem('code section');
			snippetCompletion.insertText = new vscode.SnippetString('code section');
			snippetCompletion.documentation = new vscode.MarkdownString("Section for creating functions or other code.");


            const snippetCompletionStart = new vscode.CompletionItem('start');
			snippetCompletionStart.insertText = new vscode.SnippetString('start');
			snippetCompletionStart.documentation = new vscode.MarkdownString("Starting start function");

            const snippetCompletionMove = new vscode.CompletionItem('move');
			snippetCompletionMove.insertText = new vscode.SnippetString('move');
			snippetCompletionMove.documentation = new vscode.MarkdownString("Moving a value to a register");

            const snippetCompletionCompare = new vscode.CompletionItem('compare');
			snippetCompletionCompare.insertText = new vscode.SnippetString('compare');
			snippetCompletionCompare.documentation = new vscode.MarkdownString("Comparing two things ");

            const snippetCompletionAdd = new vscode.CompletionItem('add');
			snippetCompletionAdd.insertText = new vscode.SnippetString('add');
			snippetCompletionAdd.documentation = new vscode.MarkdownString("Adding two things");

            const snippetCompletionAnd = new vscode.CompletionItem('and');
			snippetCompletionAnd.insertText = new vscode.SnippetString('and');
			snippetCompletionAnd.documentation = new vscode.MarkdownString("And logic gate : takes two thing , if binary char (0 or 1) in the two things is 1, return 1 for this char else return 0, so you have at the end a binary number. Ex : 0101 and 0011 -> 0001 ");

            const snippetCompletionLaunch = new vscode.CompletionItem('launch');
			snippetCompletionLaunch.insertText = new vscode.SnippetString('launch');
			snippetCompletionLaunch.documentation = new vscode.MarkdownString("Launching a function");

            const snippetCompletionInterrupt = new vscode.CompletionItem('interrupt');
			snippetCompletionInterrupt.insertText = new vscode.SnippetString('interrupt');
			snippetCompletionInterrupt.documentation = new vscode.MarkdownString("Doing an interrupt");

            const snippetCompletionChar = new vscode.CompletionItem('char');
			snippetCompletionChar.insertText = new vscode.SnippetString('char');
			snippetCompletionChar.documentation = new vscode.MarkdownString("Creating a string or a character variable in data section");

			const snippetCompletionTwoChar = new vscode.CompletionItem('twoChar');
			snippetCompletionTwoChar.insertText = new vscode.SnippetString('twoChar');
			snippetCompletionTwoChar.documentation = new vscode.MarkdownString("Creating a string or a two character variable in data section");

			const snippetCompletionFourChar = new vscode.CompletionItem('fourChar');
			snippetCompletionFourChar.insertText = new vscode.SnippetString('fourChar');
			snippetCompletionFourChar.documentation = new vscode.MarkdownString("Creating a string or a four character variable in data section");

			const snippetCompletionAsm = new vscode.CompletionItem('asm');
			snippetCompletionAsm.insertText = new vscode.SnippetString('asm');
			snippetCompletionAsm.documentation = new vscode.MarkdownString("using pure assembly in sasm");

			const snippetCompletionReturn = new vscode.CompletionItem('return');
			snippetCompletionReturn.insertText = new vscode.SnippetString('return');
			snippetCompletionReturn.documentation = new vscode.MarkdownString("return to the code running before the launch of the function");

			const snippetCompletionDoNothing = new vscode.CompletionItem('do-nothing');
			snippetCompletionDoNothing.insertText = new vscode.SnippetString('do-nothing');
			snippetCompletionDoNothing.documentation = new vscode.MarkdownString("do nothing (but the instrcuction count in the eip register will be impacted)");

			const snippetCompletionMultiply = new vscode.CompletionItem('multiply');
			snippetCompletionMultiply.insertText = new vscode.SnippetString('multiply');
			snippetCompletionMultiply.documentation = new vscode.MarkdownString("multiply a number with the number in eax");

			const snippetCompletionPush = new vscode.CompletionItem('push');
			snippetCompletionPush.insertText = new vscode.SnippetString('push');
			snippetCompletionPush.documentation = new vscode.MarkdownString("push a register to the stack");

			const snippetCompletionPop = new vscode.CompletionItem('pop');
			snippetCompletionPop.insertText = new vscode.SnippetString('pop');
			snippetCompletionPop.documentation = new vscode.MarkdownString("restore register from the stack");

			const snippetCompletionCFunction = new vscode.CompletionItem('c-function');
			snippetCompletionCFunction.insertText = new vscode.SnippetString('c-function');
			snippetCompletionCFunction.documentation = new vscode.MarkdownString("declare c function to use it in sasm");

			const snippetCompletionGlobalFunction = new vscode.CompletionItem('global-function');
			snippetCompletionGlobalFunction.insertText = new vscode.SnippetString('global-function');
			snippetCompletionGlobalFunction.documentation = new vscode.MarkdownString("declare a global function to use it in sasm");

			const snippetCompletionTest = new vscode.CompletionItem('test');
			snippetCompletionTest.insertText = new vscode.SnippetString('test');
			snippetCompletionTest.documentation = new vscode.MarkdownString("do an bitwise AND on two things");

			const snippetCompletionJumpZeroFlag = new vscode.CompletionItem('jumpzeroflag');
			snippetCompletionJumpZeroFlag.insertText = new vscode.SnippetString('jumpzeroflag');
			snippetCompletionJumpZeroFlag.documentation = new vscode.MarkdownString("jump if ZF is zero (for example after compare)");
			// a completion item that can be accepted by a commit character,
			// the `commitCharacters`-property is set which means that the completion will
			// be inserted and then the character will be typed.
			const commitCharacterCompletion = new vscode.CompletionItem('call');
			commitCharacterCompletion.commitCharacters = [' '];
			commitCharacterCompletion.documentation = new vscode.MarkdownString('Press ` ` to get `call `');

			// a completion item that retriggers IntelliSense when being accepted,
			// the `command`-property is set which the editor will execute after 
			// completion has been inserted. Also, the `insertText` is set so that 
			// a space is inserted after `new`
			/*const commandCompletion = new vscode.CompletionItem('new');
			commandCompletion.kind = vscode.CompletionItemKind.Keyword;
			commandCompletion.insertText = 'new ';
			commandCompletion.command = { command: 'editor.action.triggerSuggest', title: 'Re-trigger completions...' };*/

			// return all completion items as array
			return [
				simpleCompletion,
				snippetCompletion,
				commitCharacterCompletion,
				//commandCompletion,
                snippetCompletionStart,
                snippetCompletionMove,
                snippetCompletionCompare,
                snippetCompletionAdd,
                snippetCompletionAnd,
                snippetCompletionLaunch,
                snippetCompletionInterrupt,
				snippetCompletionChar,
				snippetCompletionTwoChar,
				snippetCompletionAsm,
				snippetCompletionFourChar,
				snippetCompletionReturn,
				snippetCompletionDoNothing,
				snippetCompletionMultiply,
				snippetCompletionPush,
				snippetCompletionPop,
				snippetCompletionCFunction,
				snippetCompletionGlobalFunction,
				snippetCompletionTest,
				snippetCompletionJumpZeroFlag,
			];
		}
	});

	const provider2 = vscode.languages.registerCompletionItemProvider(
		'sasm',
		{
			provideCompletionItems(document: vscode.TextDocument, position: vscode.Position) {

				// get all text until the `position` and check if it reads `console.`
				// and if so then complete if `log`, `warn`, and `error`
				const linePrefix = document.lineAt(position).text.substr(0, position.character);
				if (!linePrefix.endsWith('call ')) {
					return undefined;
				}

				return [
					new vscode.CompletionItem('start', vscode.CompletionItemKind.Method),
					//new vscode.CompletionItem('warn', vscode.CompletionItemKind.Method),
					//new vscode.CompletionItem('error', vscode.CompletionItemKind.Method),
				];
			}
		},
		' ' // triggered whenever a '.' is being typed
	);

	context.subscriptions.push(provider1, provider2);
}