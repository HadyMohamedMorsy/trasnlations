const fileInput = document.getElementById('file-input');
const importButton = document.getElementById('import-button');
const formElem = document.querySelector('.row');
const LANGUAGES = ['en' , 'ar'];
importButton.addEventListener('click', () => {
    const file = fileInput.files[0];
    if (file) {
      const reader = new FileReader();
      reader.readAsText(file, 'UTF-8');
      reader.onload = event => {
        const jsonData = JSON.parse(event.target.result);
        Object.keys(jsonData).map((header) => {
            const headerLabel = document.createElement('h2');
            headerLabel.textContent = header;
            headerLabel.className = 'col-lg-12';
            formElem.appendChild(headerLabel);
            for (const [key, value] of Object.entries(jsonData[header])){
                const control = document.createElement('div');
                const label = document.createElement('label');
                const input = document.createElement('input');
                control.className = 'mb-3 col-lg-3';

                label.textContent = key;
                label.className = 'form-label';
                input.setAttribute('name', key);
                input.setAttribute('type', 'text');
                input.setAttribute('placeholder', key);
                input.setAttribute('class', 'form-control');
                input.value = value;

                if(typeof(value) != 'object' ){
                    control.appendChild(label);
                    control.appendChild(input);
                }else if (typeof(value) == 'object'){
                    if(!Array.isArray(value)){
                        const heading = document.createElement('h4');
                        heading.textContent = key;
                        control.appendChild(heading);

                        const subControl = document.createElement('div');
                        subControl.className = 'mb-3 row';

                        for (const [subKey, subValue] of Object.entries(value)){
                            if(typeof(subValue) == 'object'){
                                continue;
                            }

                            const subLabel = document.createElement('label');
                            const subInput = document.createElement('input');

                            subLabel.textContent = subKey;
                            subLabel.className = 'form-label';
                            subInput.setAttribute('name', subKey);
                            subInput.setAttribute('type', 'text');
                            subInput.setAttribute('placeholder', subKey);
                            subInput.setAttribute('class', 'form-control');
                            subInput.value = subValue;


                            subControl.appendChild(subLabel);
                            subControl.appendChild(subInput);

                            control.appendChild(subControl);

                        }
                    }
                }
                formElem.appendChild(control);
            }
        })
      };
      reader.onerror = () => {
        console.error('Error reading file');
      };
    }
  });
