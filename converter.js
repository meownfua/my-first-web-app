// ここからコードを書いてください

export function setupConverter() {
    const converterForm = document.querySelector(".converter-form");
    const converterInput = document.querySelector(".converter-input");
    const converterFrom = document.querySelector(".converter-from");
    const converterTo = document.querySelector(".converter-to");
    const converterResult = document.querySelector(".converter-result");

    const lengthUnit = [
  { name: "meter", base: 1 },
  { name: "kilometer", base: 1000 },
  { name: "centimeter", base: 0.01 },
  { name: "millimeter", base: 0.001 },
  { name: "inch", base: 0.0254 }, 
  { name: "foot", base: 0.3048 },
  { name: "yard", base: 0.9144 },
  { name: "mile", base: 1609.344 }
    ];

    lengthUnit.forEach((unit) => {
    const fromOption = document.createElement("option");
    fromOption.value = unit.base;
    fromOption.textContent = unit.name;
    converterFrom.appendChild(fromOption);

    const toOption = document.createElement("option");
    toOption.value = unit.base;
    toOption.textContent = unit.name;
    converterTo.appendChild(toOption);
  });
    
    converterFrom.selectedIndex = 0;
    converterTo.selectedIndex = 1;

    function calculate() {
        const value = parseFloat(converterInput.value);

        if (isNaN(value)) {
            converterResult.textContent = "Please enter a valid number";
            return;
        }

        const fromBase = parseFloat(converterFrom.value);
        const toBase = parseFloat(converterTo.value);

        const convertedValue = (value * fromBase) / toBase;

        converterResult.textContent = `${value} ${converterFrom.options[converterFrom.selectedIndex].textContent} = ${convertedValue.toFixed(3)} ${converterTo.options[converterTo.selectedIndex].textContent}`;
    }
    
    converterForm.addEventListener("input", calculate);
    calculate();
}







