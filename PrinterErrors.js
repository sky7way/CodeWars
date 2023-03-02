function printerError(s) {
	let passingLetters = ("abcdefghijklm").split("");
	let a = s.length;
	let i = 0;
	let count = 0;

	while (i < a)
	{
		if (passingLetters.indexOf(s[i]) === -1) {
			count++;
		}
		i++;
	}
	return (count + "/" + a);
}