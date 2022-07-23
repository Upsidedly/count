let count = 0;
let debounce = false

function rand(min: number, max: number) {
  return min + Math.random() * (max - min);
}

function get_random_color(lightness?: number) {
  var h = rand(1, 360);
  var s = rand(0, 100);
  var l = lightness ?? rand(0, 100);
  return "hsl(" + h + "," + s + "%," + l + "%)";
}

$('#hugeform').text('lights out.')
$('#btn').text(`count: ${count}`)

function randomLetter(amount?: number): string {
    if (!amount) {
        return String.fromCharCode(65 + Math.floor(Math.random() * 26)).toLowerCase();
    } else {
        return Array.from({ length: amount }, () => {
            return randomLetter()
        }).map(l => l!.toLowerCase()).join('')
    }
}

function specialAction(count: number): void {
}

function specialCount(count: number): string {
    if (count % 100 === 0) {
        return `${count} 🎉`
    }

    if (count.toString().endsWith('69')) {
        return "( ͡° ͜ʖ ͡°)";
    }

  return `${count}`;
}

$('#btn').on('click', () => {

    const buttoncolor = get_random_color();

    count += 1
    $('#btn').text(`count: ${specialCount(count)}`)
    $(":root").css("--dark", get_random_color());
    $(":root").css("--light", buttoncolor);

    $('btn').text(twemoji.parse($('#btn').get(0)!));

    specialAction(count)
})