

// Function to handle the scroll event for multiple sections
function handleScroll(sections){
    window.addEventListener('scroll' , () => {
        //iterate over each section
        sections.forEach(section => {
            //select all elements within the current selection
            const elements = document.querySelectorAll(section);
            // Iterate over each element within the section
            elements.forEach(el => {
                //get the bounding rectangle of the element
                const bounding = el.getBoundingClientRect();
                // Check if the element is in the viewport
                if (bounding.top <= window.innerHeight && bounding.bottom >= 0 ){
                   // If the element is in the viewport, add the 'show' class
                    el.classList.add('show');
                    //log a message indicating the show class was added
                    console.log(`Adding show class to ${section}`);
                 } else {
                    //if the element is not in the viewport,remove the show class
                    el.classList.remove('show');
                    //log a message indicating the show class was removed
                    console.log(`Removing show class from ${section} `);
                 }
            });
        });
    });
}

//list of section classes to handle
const sectionClasses = ['.section1', '.section2', '.section3', '.section4', '.section5','.section6'];

// Call the function with the section classes
handleScroll(sectionClasses);    

//FAQ page javascript

//wait until the Dom content is fully loaded
document.addEventListener('DOMContentLoaded', () => {
    //select all button elements on the page
    const buttons = document.querySelectorAll("button");
    //iterate through each button
    buttons.forEach(button => {
        //event listener to each button
        button.addEventListener('click', () =>{
            //get the next sibling element of the button(answer)
            const faq = button.nextElementSibling;
            //get the second child of the button(the icon)
            const icon = button.children[1];
           //check if both thr fAQ answer and the icon exist
            if (faq && icon){
                //toggle the show class on the faq answer to show/hide
                faq.classList.toggle('show');
                //toggle the rotae class on the icon to rotate it
                icon.classList.toggle('rotate');
                //log a messed to the console for debugging purpose
                console.log('Toggled show and rotate classes');
            } else {
                console.log('FAQ or icon not found');
            }
           
        });
    });
});

