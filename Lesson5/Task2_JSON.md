## Задача №2: проверить JSON на Well formed:
``` json
{
    "surname": "Иванов"
    "name": "Иван"
    "patronymic": "Иванович"
    "birthdate": "01.01.1990"
    "birthplace": "Москва"
    "phone": "8 926 766 48 48"
}
```
Приложите правильный на ваш взгляд вариант.

---

Решение:
В приведенном фргменте отсутствут разделители полей - запятые. Правильный вариант:
``` json
{
    "surname": "Иванов",
    "name": "Иван",
    "patronymic": "Иванович",
    "birthdate": "01.01.1990",
    "birthplace": "Москва",
    "phone": "8 926 766 48 48"
}
```

Можно предложить изменить фрагмент XML для создания массива объектов персонажей:
``` json
{
    "persons":
    [
        {
            "id":1,
            "surname": "Иванов",
            "name": "Иван",
            "patronymic": "Иванович",
            "birthdate": "01.01.1990",
            "birthplace": "Москва",
            "phone": "8 926 766 48 48"
        },
        {
            "id":2,
            "surname": "Петров",
            "name": "Сергей",
            "patronymic": "Иванович",
            "birthdate": "11.03.1995",
            "birthplace": "Новосибирск",
            "phone": "8 906 366 50 05"        
        }
    ]
}
```
