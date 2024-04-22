async function saveToFile() {
    const textInput = document.getElementById("textInput").value;
    if (!textInput) {
        alert("Please enter some text to save.");
        return;
    }

    try {
        const fileHandle = await window.showSaveFilePicker({
            suggestedName: 'text_file.txt',
            types: [{
                description: 'Text Files',
                accept: {
                    'text/plain': ['.txt']
                }
            }]
        });
        const writable = await fileHandle.createWritable();
        await writable.write(textInput);
        await writable.close();
        alert("Text saved to file successfully!");
    } catch (error) {
        console.error("Error saving file:", error);
        alert("Error saving file. Please try again.");
    }
}

document.getElementById("saveBtn").addEventListener("click", saveToFile);