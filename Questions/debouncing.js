const debounce = (fn, delay) => {

    let t_id;
    return function(...args) {
        if(t_id) {
            clearTimeout(t_id);
        }
        t_id = setTimeout(() => {
            fn();
        }, delay);
    };
};

