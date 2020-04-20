$(".burgers").each(function() {
    const theta = Math.floor(50 * Math.random()) - 10;

    $(this).css({
        "filter": `hue-rotate(${theta}deg)`
    });
});