//  Immediately Invoked Function Expressions (IIFE)

(function SK() {
    // name IIFE
    console.log(`DB CONNECTED`);
})();

( (name) => {
    console.log(`DB CONNECTED ${name}`);
} )("SAHAJ");