import pdfjsLib from 'pdfjs-dist/build/pdf';

pdfjsLib.GlobalWorkerOptions.workerSrc = `//cdnjs.cloudflare.com/ajax/libs/pdf.js/${pdfjsLib.version}/pdf.worker.js`;

export const ReadPDFFile = (file) => {
    return new Promise((resolve, reject) => {
        const reader = new FileReader();

        reader.onload = (event) => {
            const pdfData = new Uint8Array(event.target.result);
            const pdf = new pdfjsLib.getDocument(pdfData);

            pdf.promise.then((pdfDocument) => {
                const textPromises = [];

                for (let pageNum = 1; pageNum <= pdfDocument.numPages; pageNum++) {
                    textPromises.push(pdfDocument.getPage(pageNum).then(page => page.getTextContent()));
                }

                Promise.all(textPromises)
                    .then(textContents => {
                        const text = textContents.map(content => content.items.map(item => item.str).join(' ')).join('\n');
                        resolve(text);
                    })
                    .catch(reject);
            });
        };

        reader.onerror = reject;
        reader.readAsArrayBuffer(file);
    });
};
