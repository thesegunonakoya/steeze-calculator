function captureDiv() {
    document.getElementById('screenshotButton').style.display = 'none';

    document.getElementById('refresh').style.display = 'none';

    setTimeout(function() {
        document.getElementById('refresh').style.display = 'inline';
        document.getElementById('screenshotButton').style.display = 'inline';
    }, 1000);

    html2canvas(document.getElementById('captureDiv')).then(function (canvas) {
        var link = document.createElement('a');
        link.download = 'steeze.png';
        link.href = canvas.toDataURL();
        link.click();
    });
}