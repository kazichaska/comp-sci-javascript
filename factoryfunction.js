// /* --------------------------- APP get performace gain using class or constructor function
class Tiger {
    constructor() {
        this.noise = 'roar';
    }
    sound() {
        console.log(this.noise)
    }
}

// /* ---------------------------

// constructor 

const simba = new Tiger();
simba.sound(); //=> "roar"


const tiger = function () {
    const noise = 'roar';
    return {
        sound: function () {
            console.log(noise);
        },
    }
}

const tigger = tiger();
tigger.sound(); //=> "roar"

// /* ---------------------------

const chiller = (state) => ({
    chill: () => console.log(`Ooh, I'm at ${state.temp} degrees`)
})

const caller = (state) => ({
    call: () => console.log(`I am calling ${state.number}`)
})

const browserInternet = (state) => ({
    browse: () => state.url
})

caller({ number: '411' }).call() //=> I am calling 411

// /* ---------------------------

const chillinator = (temp) => {
    let state = {
        temp,
        number: 311,
        url: 'google.com'
    }
    return { ...chiller(state), ...caller(state), ...browserInternet(state) }
}


// /* ---------------------------

const robot = {
    name: "rumba",
    clean() {
        alert(`${this.name} is now cleaning`);
    }
};

setTimeout(robot.clean, 0); //=>  is now cleaning


// /* ---------------------------

const clickHandler1 = () => {
    this.textContent = 'Clicked!';
};

const clickHandler2 = function () {
    this.textContent = 'Clicked!';
};

buttonEl.addEventListener('click', clickHandler1);


  // /* ---------------------------
  // /* ---------------------------
  // /* ---------------------------
  // /* ---------------------------
  // /* ---------------------------
  // /* ---------------------------
  // /* ---------------------------
