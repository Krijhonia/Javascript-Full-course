// Bind in JS

class React {
    constructor() {
        this.library = "React";
        this.server = 'https://localhost/3000';

        // Get the button element
        this.btn = document.querySelector('button');

        // INCORRECT WAY (commented out for reference):
        // this.btn.addEventListener('click', this.handleclick); 
        // Problem: When 'handleclick' runs, 'this' will represent the HTML Button, not the React class instance.
        // So 'this.server' would be undefined.

        // CORRECT WAY using bind:
        // We use .bind(this) to force 'this' inside handleclick to always refer to the class instance (app).
        this.btn.addEventListener('click', this.handleclick.bind(this)); 
    }

    handleclick() {
        console.log('Button clicked');
        // Because of .bind(this) above, we can access class properties successfully:
        console.log(this.server); 
    }
}

const app = new React();