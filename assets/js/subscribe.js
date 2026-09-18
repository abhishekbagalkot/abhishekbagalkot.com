// Progressive enhancement: post the subscribe form into a hidden iframe so the
// visitor stays on the page. Without JS the form submits normally.
(function () {
  var forms = document.querySelectorAll('.subscribe-form');
  if (!forms.length || !('replaceWith' in Element.prototype)) return;

  Array.prototype.forEach.call(forms, function (form, i) {
    var name = 'bd-target-' + i;
    var frame = document.createElement('iframe');
    frame.name = name;
    frame.title = 'Subscription target';
    frame.setAttribute('aria-hidden', 'true');
    frame.setAttribute('tabindex', '-1');
    frame.style.display = 'none';
    document.body.appendChild(frame);
    form.target = name;

    var sent = false;

    form.addEventListener('submit', function () {
      if (typeof form.checkValidity === 'function' && !form.checkValidity()) return;
      sent = true;
      var btn = form.querySelector('button');
      if (btn) { btn.disabled = true; btn.textContent = 'Subscribing…'; }
    });

    frame.addEventListener('load', function () {
      if (!sent) return;                       // ignore the initial blank load
      var note = document.createElement('p');
      note.className = 'subscribe-done';
      note.setAttribute('role', 'status');
      note.textContent = 'Almost there — check your inbox and click the confirmation link.';
      form.replaceWith(note);
    });
  });
})();
