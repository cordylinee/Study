function omikuji()
{
let random = Math.floor( Math.random() * 10 );

let kuji = [];
kuji[0]="大吉！<br>絶好調です。何もかも貴方の思い通り！";
kuji[1]="中吉！<br>何か良いことがありそう。";
kuji[2]="吉<br>穏やかな日々が過ごせそうです。";
kuji[3]="小吉<br>今日はゆっくりと過ごしましょう。";
kuji[4]="末吉…<br>忘れ物に注意！";
kuji[5]="ぴょん吉…<br>今日は早くお家に帰ると良いことがあるでしょう。";
kuji[6]="中吉<br>懐かしい人に出会えそう。";
kuji[7]="小吉<br>残り物には福がある。";
kuji[8]="末吉…<br>こんな日は大人しくしていよう。";
kuji[9]="吉<br>懐かしい人に連絡を取ってみよう。";

document.open();
document.write('<html><body><center><font size="5">' + kuji[random]);
document.write('<br><br>');
document.write('<a href="index.html">戻る</a></font></center>');
document.write('</body></html>');
document.close();
}
