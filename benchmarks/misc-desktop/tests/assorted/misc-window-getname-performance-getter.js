var origPostMessage = window.postMessage;
window.postMessage = function(arg) {
    origPostMessage.call(window, arg, "*");
}
window.onmessage = function(e) {
    record(e.data);
}
document.write('<script src="getname-performance-getter-helper.js"></' + 'script>');
