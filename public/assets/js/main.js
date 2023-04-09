const fileInput = document.getElementById('file-input');
const importButton = document.getElementById('import-button');
const formElem = document.getElementById('my-form');
const LANGUAGES = ['en' , 'ar'];
importButton.addEventListener('click', () => {
    const file = fileInput.files[0];
    if (file) {
      const reader = new FileReader();
      reader.readAsText(file, 'UTF-8');
      reader.onload = event => {
        const jsonData = JSON.parse(event.target.result);
        formElem.innerHTML = printJson(jsonData);
      };
      reader.onerror = () => {
        console.error('Error reading file');
      };
    }
  });

  function printJson(data , parentKey = ''){
    let html = '';
    if (typeof data === 'object'){
        html += '<div class="row">';
        for (let key in data) {
            let value = data[key];
            let keyPath = parentKey ? `${parentKey}.${key}` : key;

            if (typeof value === 'object'){
                html += `<h3>${keyPath}</h3>`;
                html +=printJson(value, keyPath);
            }else{
                html +=
                `<div class="col-lg-6">
                    <label class="form-label">${keyPath}:</label>
                    <input class="form-control" name="${keyPath.replace('.' , '_')}" type="text" value="${value}">
                </div>`;
            }
        }
        html += '</div>';
    }

    return html;
  }


