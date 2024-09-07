// Ensure DOM content is fully loaded
document.addEventListener('DOMContentLoaded', function () {
    // Access form elements
    var resumeForm = document.getElementById('resume-form');
    // Access form fields
    var nameInput = document.getElementById('name');
    var emailInput = document.getElementById('email');
    var educationInput = document.getElementById('education');
    var workExperienceInput = document.getElementById('work-experience');
    var skillsInput = document.getElementById('skills');
    // Access output fields
    var outputName = document.getElementById('output-name');
    var outputEmail = document.getElementById('output-email');
    var outputEducation = document.getElementById('output-education');
    var outputWorkExperience = document.getElementById('output-work-experience');
    var outputSkills = document.getElementById('output-skills');
    // Validate form function
    function validateForm() {
        var isValid = true;
        // Clear previous errors (if any)
        var formFields = [nameInput, emailInput, educationInput, workExperienceInput, skillsInput];
        formFields.forEach(function (field) {
            field.style.borderColor = '';
        });
        // Basic validation
        if (!nameInput.value.trim()) {
            nameInput.style.borderColor = 'red';
            isValid = false;
        }
        if (!emailInput.value.includes('@') || !emailInput.value.trim()) {
            emailInput.style.borderColor = 'red';
            isValid = false;
        }
        if (!educationInput.value.trim()) {
            educationInput.style.borderColor = 'red';
            isValid = false;
        }
        if (!workExperienceInput.value.trim()) {
            workExperienceInput.style.borderColor = 'red';
            isValid = false;
        }
        if (!skillsInput.value.trim()) {
            skillsInput.style.borderColor = 'red';
            isValid = false;
        }
        return isValid;
    }
    // Update resume output
    function updateResume() {
        outputName.textContent = nameInput.value;
        outputEmail.textContent = emailInput.value;
        outputEducation.textContent = educationInput.value;
        outputWorkExperience.textContent = workExperienceInput.value;
        outputSkills.textContent = skillsInput.value;
    }
    // Form submit event listener
    resumeForm.addEventListener('submit', function (event) {
        event.preventDefault(); // Prevent form from submitting
        // Validate form fields
        if (validateForm()) {
            updateResume(); // Update the resume dynamically if validation is successful
        }
    });
    // Function to make resume sections editable
    function makeEditable(fieldElement, inputType) {
        if (inputType === void 0) { inputType = 'input'; }
        fieldElement.addEventListener('click', function () {
            var _a;
            var currentText = ((_a = fieldElement.textContent) === null || _a === void 0 ? void 0 : _a.trim()) || '';
            // Create an input or textarea element for editing
            var inputElement = document.createElement(inputType);
            // Cast inputElement to HTMLInputElement or HTMLTextAreaElement
            if (inputType === 'input') {
                inputElement.value = currentText;
            }
            else if (inputType === 'textarea') {
                inputElement.value = currentText;
            }
            fieldElement.textContent = ''; // Clear the text content
            fieldElement.appendChild(inputElement); // Insert input element
            inputElement.focus(); // Focus on the input for editing
            // When the input loses focus, save the changes
            inputElement.addEventListener('blur', function () {
                if (inputType === 'input') {
                    fieldElement.textContent = inputElement.value;
                }
                else if (inputType === 'textarea') {
                    fieldElement.textContent = inputElement.value;
                }
            });
            // Also save changes on pressing Enter (for input fields)
            inputElement.addEventListener('keypress', function (event) {
                if (event.key === 'Enter') {
                    if (inputType === 'input') {
                        fieldElement.textContent = inputElement.value;
                    }
                    else if (inputType === 'textarea') {
                        fieldElement.textContent = inputElement.value;
                    }
                    inputElement.blur(); // Remove focus after pressing Enter
                }
            });
        });
    }
    // Enable editing on each resume section
    makeEditable(outputName);
    makeEditable(outputEmail);
    makeEditable(outputEducation, 'textarea');
    makeEditable(outputWorkExperience, 'textarea');
    makeEditable(outputSkills, 'textarea');
});
// Add the "Generate Resume" button
/*
// Ensure DOM content is fully loaded
document.addEventListener('DOMContentLoaded', function () {
    // Access form elements
    var resumeForm = document.getElementById('resume-form');
    // Access form fields
    var nameInput = document.getElementById('name');
    var emailInput = document.getElementById('email');
    var educationInput = document.getElementById('education');
    var workExperienceInput = document.getElementById('work-experience');
    var skillsInput = document.getElementById('skills');
    // Access output fields
    var outputName = document.getElementById('output-name');
    var outputEmail = document.getElementById('output-email');
    var outputEducation = document.getElementById('output-education');
    var outputWorkExperience = document.getElementById('output-work-experience');
    var outputSkills = document.getElementById('output-skills');
    // Validate form function
    function validateForm() {
        var isValid = true;
        // Clear previous errors (if any)
        var formFields = [nameInput, emailInput, educationInput, workExperienceInput, skillsInput];
        formFields.forEach(function (field) {
            field.style.borderColor = '';
        });
        // Basic validation
        if (!nameInput.value.trim()) {
            nameInput.style.borderColor = 'red';
            isValid = false;
        }
        if (!emailInput.value.includes('@') || !emailInput.value.trim()) {
            emailInput.style.borderColor = 'red';
            isValid = false;
        }
        if (!educationInput.value.trim()) {
            educationInput.style.borderColor = 'red';
            isValid = false;
        }
        if (!workExperienceInput.value.trim()) {
            workExperienceInput.style.borderColor = 'red';
            isValid = false;
        }
        if (!skillsInput.value.trim()) {
            skillsInput.style.borderColor = 'red';
            isValid = false;
        }
        return isValid;
    }
    // Update resume output
    function updateResume() {
        outputName.textContent = nameInput.value;
        outputEmail.textContent = emailInput.value;
        outputEducation.textContent = educationInput.value;
        outputWorkExperience.textContent = workExperienceInput.value;
        outputSkills.textContent = skillsInput.value;
    }
    // Form submit event listener
    resumeForm.addEventListener('submit', function (event) {
        event.preventDefault(); // Prevent form from submitting
        // Validate form fields
        if (validateForm()) {
            updateResume(); // Update the resume dynamically if validation is successful
        }
    });
    // Function to make resume sections editable
    function makeEditable(fieldElement, inputType) {
        if (inputType === void 0) { inputType = 'input'; }
        fieldElement.addEventListener('click', function () {
            var _a;
            var currentText = ((_a = fieldElement.textContent) === null || _a === void 0 ? void 0 : _a.trim()) || '';
            // Create an input or textarea element for editing
            var inputElement = document.createElement(inputType);
            // Cast inputElement to HTMLInputElement or HTMLTextAreaElement
            if (inputType === 'input') {
                inputElement.value = currentText;
            }
            else if (inputType === 'textarea') {
                inputElement.value = currentText;
            }
            fieldElement.textContent = ''; // Clear the text content
            fieldElement.appendChild(inputElement); // Insert input element
            inputElement.focus(); // Focus on the input for editing
            // When the input loses focus, save the changes
            inputElement.addEventListener('blur', function () {
                if (inputType === 'input') {
                    fieldElement.textContent = inputElement.value;
                }
                else if (inputType === 'textarea') {
                    fieldElement.textContent = inputElement.value;
                }
            });
            // Also save changes on pressing Enter (for input fields)
            inputElement.addEventListener('keypress', function (event) {
                if (event.key === 'Enter') {
                    if (inputType === 'input') {
                        fieldElement.textContent = inputElement.value;
                    }
                    else if (inputType === 'textarea') {
                        fieldElement.textContent = inputElement.value;
                    }
                    inputElement.blur(); // Remove focus after pressing Enter
                }
            });
        });
    }
    // Enable editing on each resume section
    makeEditable(outputName);
    makeEditable(outputEmail);
    makeEditable(outputEducation, 'textarea');
    makeEditable(outputWorkExperience, 'textarea');
    makeEditable(outputSkills, 'textarea');
});
*/ 
