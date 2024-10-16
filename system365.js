// JSON data for system365
const system365Data = {
    title: "System365 ツ",
    description: "LunarySystem365",
    version: "v1.9.6",
    developers: "Lunary Network staff team",
    OS: "Windows 11 Pro",
    languages: ["HTML", "CSS", "JavaScript", "JSON"],
    system: "debug"
};

// Class to handle system operations
class System365 {
    constructor(data) {
        this.title = data.title;
        this.description = data.description;
        this.version = data.version;
        this.developers = data.developers;
        this.OS = data.OS;
        this.languages = data.languages;
        this.system = data.system;
        this.components = [];
        this.events = {};
    }

    initialize() {
        console.log(`Initializing ${this.title}...`);
        console.log(`Description: ${this.description}`);
        console.log(`Version: ${this.version}`);
        console.log(`Developers: ${this.developers}`);
        console.log(`Operating System: ${this.OS}`);
        console.log(`Languages: ${this.languages.join(', ')}`);
        console.log(`System Mode: ${this.system}`);
        this.triggerEvent('initialized');
    }

    addComponent(component) {
        this.components.push(component);
        console.log(`${component} added to ${this.title}.`);
        this.triggerEvent('componentAdded', component);
    }

    removeComponent(component) {
        const index = this.components.indexOf(component);
        if (index > -1) {
            this.components.splice(index, 1);
            console.log(`${component} removed from ${this.title}.`);
            this.triggerEvent('componentRemoved', component);
        } else {
            console.log(`${component} not found in ${this.title}.`);
        }
    }

    on(event, callback) {
        if (!this.events[event]) {
            this.events[event] = [];
        }
        this.events[event].push(callback);
    }

    triggerEvent(event, data) {
        if (this.events[event]) {
            this.events[event].forEach(callback => callback(data));
        }
    }

    logSystemInfo() {
        console.log(this);
    }
}

// Example usage
const system365 = new System365(system365Data);
system365.on('initialized', () => console.log(`${system365.title} has been initialized.`));
system365.on('componentAdded', (component) => console.log(`Event: ${component} was added.`));
system365.on('componentRemoved', (component) => console.log(`Event: ${component} was removed.`));

system365.initialize();
system365.addComponent('UserManagement');
system365.addComponent('AnalyticsModule');
system365.removeComponent('UserManagement');
system365.logSystemInfo();
