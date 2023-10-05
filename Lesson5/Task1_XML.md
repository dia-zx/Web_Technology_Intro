Задача №1: проверить XML на Well formed:

``` xml
<req>

    <surname>Иванов</surname>
    <name>Иван</name>
    <patronymic>Иванович</patronymic>
    <birthdate>01.01.1990</birthdate>
    <birthplace>Москва</birthplace>
    <phone>8 926 766 48 48</phone>
</req
```
Приложите правильный на ваш взгляд вариант.

---

Решение:
В приведенном фргменте отсутствует закрывающая галка (>) в конце. Правильный вариант:
```xml
<req>

    <surname>Иванов</surname>
    <name>Иван</name>
    <patronymic>Иванович</patronymic>
    <birthdate>01.01.1990</birthdate>
    <birthplace>Москва</birthplace>
    <phone>8 926 766 48 48</phone>
</req>
```

Можно предложить изменить фрагмент XML для создания массива объектов персонажей:
```xml
<req>
    <person>
        <id>1</id>
        <surname>Иванов</surname>
        <name>Иван</name>
        <patronymic>Иванович</patronymic>
        <birthdate>01.01.1990</birthdate>
        <birthplace>Москва</birthplace>
        <phone>8 926 766 48 48</phone>
    </person>
    <person>
        <id>2</id>
        <surname>Петров</surname>
        <name>Сергей</name>
        <patronymic>Иванович</patronymic>
        <birthdate>11.03.1995</birthdate>
        <birthplace>Новосибирск</birthplace>
        <phone>8 906 366 50 05</phone>
    </person>    
</req>
```

