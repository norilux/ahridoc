export function replaceToBlock (string) {
    const regExp = /`[a-zA-Z0-9А-Яа-я .|{}\-#@]+`/g;
    return string.replace(regExp, substring => `<span class="bg">${substring.replace(/`/g, '')}</span>`).replace('/n', '<br>');
}
