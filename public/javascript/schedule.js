/**
 * Created by Стас on 15.11.2016.
 */
$(document).ready(function(){
    $('#addLesson').click(function(){
        $('.addLessonForm').show();
    });
    $("#btnCreateCalendar").click(function(){
        createCalendar("calendar", new Date(Date.now()).getFullYear(), $("#month").val());
    });
});

function createCalendar(id, year, month) {
    var mon = month - 1; // месяцы в JS идут от 0 до 11, а не от 1 до 12
    var d = new Date(year, mon);

    var table = '<table><tr><th>пн</th><th>вт</th><th>ср</th><th>чт</th><th>пт</th></tr><tr>';

    // заполнить первый ряд от понедельника
    // и до дня, с которого начинается месяц
    // * * * | 1  2  3  4
    for (var i = 0; i < getDay(d); i++) {
        table += '<td></td>';
    }

    // ячейки календаря с датами
    while (d.getMonth() == mon) {
        table += '<td>' + ("0" + d.getDate()).slice(-2) + '.' + ("0" + (d.getMonth() + 1)).slice(-2) + getLessons() + '</td>';

        if (getDay(d) % 7 == 4) { // пт, последний день - перевод строки
            table += '</tr><tr>';
            d.setDate(d.getDate() + 2);
        }
        d.setDate(d.getDate() + 1);
    }

    // добить таблицу пустыми ячейками, если нужно
    if (getDay(d) != 0) {
        for (var i = getDay(d); i < 5; i++) {
            table += '<td></td>';
        }
    }

    // закрыть таблицу
    table += '</tr></table>';

    // только одно присваивание innerHTML
    $("#" + id).html(table)
}

function getDay(date) { // получить номер дня недели, от 0(пн) до 6(вс)
    var day = date.getDay();
    if (day == 0) day = 7;
    return day - 1;
}

function getLessons() {
    var table = "";
    table += '<table></tr><tr>';
    for (var i = 1; i < 9; i++) {
        table += '<td>' + i + ' Урок </td>';
        table += '</tr><tr>';
    }
    table += '</table>';
    return table;
}

