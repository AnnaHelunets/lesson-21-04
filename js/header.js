const header_container = document.querySelector(".js_header_container")
const headerEl = `
<ul class = "header_nav">
<li><a href="/01-event-listeners.html">Слухачі подій</a></li>
<li><a href="/02-forms.html">Події сабміта форми</a></li>
<li><a href="/03-input-events.html">Події інпутів</a></li>
<li><a href="/04-keyboard-events.html">Події клавіатури</a></li>
<li><a href="/05-mouse-events.html">Події миши</a></li>
<li><a href="/05.1-3d.html">Події миши - 3d</a></li>
<li><a href="/06-modal.html">Майстерня: модальне вікно</a></li>
</ul>
`
header_container.insertAdjacentElement("beforeend", headerEl)