# React - The Complete Guide (incl Hooks, React Router, Redux) 

* [1. Getting Started](#getting-started)
* [2. JavaScript ES6](#javascript-es6)
* [3. The Basics](#the-basics)
* [4. Working with List and Conditionals](#working-with-list-and-conditionals)
* [5. Styling React Components & Elements](#styling-react-components--elements)
* [6. Debugging React Apps](#debugging-react-apps)
* [7. Diving Deeper into Components & React Internals](#diving-deeper-into-components--react-internals)
* [9. Reaching out to the Web (Http / Ajax)]
* [10. Section 10: Burger Builder Project: Accessing a Server]
* [ Questions](#questions)


## Getting Started

### Intro

React - JS библиотека для построения пользовательских интерфейсов. Приложения на реакт запускаются в браузерах. Все действия происходят сразу после того, как они инициированы пользователем. Не надо ждать ответа от сервера.

Пользовательские интерфейсы на Реакт построены с помощью компонентов. Все что видит пользователь на странице можно разбить на компоненты. (Например, хедер, футер, контент, сайдбар)

Почему компоненты это удобно?

 * Легче поддерживать код
 * Можно переиспользовать компоненты.

 Каждый компонент в итоге выдает какой-то настраиваемый элемент html-разметки.


### First React Code

#### Окружение

Для использования React нужно как минимум следующее:

 * React - содержит необходимую логику для создания компонентов
 * React DOM - рендерит компоненты в настоящий DOM
 * Babel - JS препроцессор для использования последних фич JS, в итоге делает код таким, чтобы он работал в любых браузерах, а писать его можно со всеми последними фичами.

#### Компонент

Компонент реакт - это ф-ция, возвращает код, который будете рендериться в DOM.
Название - с большой буквы.
Возвращаемый код можно писать в формате **JSX**.

return () - в скобках многострочный код, туда можно просто вставить разметку и Babel преобразует ее в правильный код.

```javascript
  ReactDOM.render(<ComponentFunctionName />,document.querySelector('#componentBlockId'));
```
  рендерит компонент, принимает:

 * компонент, как html-элемент ( в < />)
 * html-элемент, в который вставить компонент

В **JXS** лучше использовать className вместо class, т.к. class - зарезервированное слово (но у меня в кодепен и class сработал)

#### Параметры

Одно из главных преимуществ компонентов, в том, что мы можем формировать их динамически.

В аргумент компонента передаются все атрибуты, которые задаются компоненту при рендеринге.

Аргументы передаются в **JSX** внутри **{}**.

Таким образом можно переиспользовать один и тот же компонент с разными параметрами.

#### Рендеринг одной переменной app

Можно поместить все компоненты в одну переменную и отрендерить ее. Их надо обернуть в один эл-т, т.к. **JSX** принимает только один корневой элемент.
С таким подходом создают Single Page Application.

[codepen](https://codepen.io/mayasol/pen/OJVJJJX)


#### Какие проблемы решает React

 * трудности в управлении состоянием пользовательского интерфейса. При изменении html разметки надо менять js, т.к. элементы определяются querySelector. В приложениях, где надо быстро добавлять или удалять эл-ты код становится громоздким.

 * позволяет сконцентрироваться на логике приложения и не беспокоиться о технической реализации многих вещей

 * у React хорошая поддержка, код работает быстро и эффективно

 * большое коммьюнити, легко найти решение проблемы, дополнительные пакеты


#### Single Page Application


**Single Page Applcation**

 - самый популярный подход для приложений на реакт. Работает быстрее, т.к. не надо перезагружать всю страницу и ждать ответа от сервера.

 * Получаем одну страницу с сервера. Страница состоит из реакт-компонентов. Сама страница - root-компонент, который тоже управляется реактом.

 * Используется подход с единственным вызовом ReactDOM.render() для корневого эл-та.

 * рекомендуется использовать библиотеку react-router


 **Multi Page Application**

 * много страниц, по одной на каждый адрес. Реакт используется для отдельных виджетов, которые не знают о существовании друг друга.

 * ReactDOM.render() вызывается для каждого виджета.


## JavaScript ES6

JSBean - удобная песочница. Можно выполнять JS и видеть вывод в консоль.

### Let and Const

Используйте let для переменных и const для констант.

### Arrow Functions


```javascript
const myFunc=()=> {
...
}
````

С одним аргументом:

```javascript
const myFunc= name => {
...
}
````

Только с оператором return в теле:

```javascript
const myFunc= number => number*2;
````


### Экспорт и Импорт (Модули)

Позволяет разбить код на файлы. Импортировать в файл другие файлы, чтобы js код в файле знал какие у него зависимости.


Default export: 
```javascript
const person = {
	name: 'Max'
}

export default person
````

Not default export: 

```javascript
const clean = () => { ... };

const baseData = 10;

export clean;
export baseData;
````

Default import:

```javascript
import prs form person.js;
````

* можно называть как угодно, всегда импортируется default


Not default import (named import)

```javascript
import {clean as MyClean} form  utility.js;
import {baseData as MyData} form  utility.js;

import * as bundled from utility.js;
````
* надо указывать точные имена в {} и можно указать свое имя после **as** 
* bundled - объект, содержащий все импортированные переменные как св-ва

### Classes

```javascript
class Human {
  constructor() {
    this.gender = 'female';
  }
  
  printGender() {
    console.log(this.gender);
  }
}

class Person extends Human {
  constructor() {
    super();
    this.name = 'Maya';
    this.gender = 'male';
  }
  
  printMyName() {
    console.log(this.name);
  }
}

const person = new Person();

person.printMyName();
person.printGender();
```

super() - вызывает constructor() родительского класса

### Classes Properties and Methods

ES7 синтакс задания св-в класса:

```javascript

class MyClass {

  myProperty = 'value';
  
  myMethod = () =>  {};
}
```

Преимущества использования стрелочной ф-ции, как значения св-ва - нет проблем с this для методов. (? Они всегда вызываются в контектсе своего объекта ?)

```javascript
class Human {
    gender = 'female';
  
  printGender = () => {
    console.log(this.gender);
  }
}

class Person extends Human {
    name = 'Maya';
    gender = 'male';
  
  printMyName = () => {
    console.log(this.name);
  }
}

const person = new Person();

person.printMyName();
person.printGender();
```

[jsbin](https://jsbin.com/picilap/10/edit?js,output)


### Spread and Rest Operators

* Spread 

 используется чтобы разделить элементы массива или св-ва объекта.

```javascript
const newArray = [...oldArray,1,2];
const newObject = {...oldObject,newProp: 5}
```

 если у oldObject есть св-во newProp оно будет переписано с новым значением

* Rest

```javascript
function sortArgs(...args) {
	return args.sort();
}
```

эта ф-ция принимает любое количество аргументов в массив args


### Destructuring

Извлечение эл-тов массива или св-в объекта и сохранение их в переменных.

```javascript
[a, , b] = ['Hello',',','World'];
console.log(a); // 'Hello'
console.log(b); // 'World'
```

```javascript
[name] = {name: 'Maya',age: '37'];
console.log(name); // 'Maya'
console.log(age); // undefined
```

### Reference and Primitive Type Refresher

Примитивы копируются при присваивании в переменную или при присванивании переменной значения другой переменной.
Объекты и массивы - ссылочные типы, при присваивании их переменной, копируется ссылка на массив или объект.

По настоящему скопировать эл-ты массива или св-ва объекта в другой массив или объект можно с помощью spread.

```javascript
const person = {name: 'Maya',age: '37'];

const newPerson = {...person};
```


### Array Functions

Не имеют собственного this, берут его из текущей области видимости.

```javascriptame 
const double = numbers.map((i) => i*2);

console.log(numbers); // [1, 2, 3]
console.log(double); // [2, 4, 6]
```

## The Basics

### Build Workflow

#### Зачем он нужен?

* Оптимизировать код

* Использовать все последние js фичи.

* Повышает продуктивность разработчика. (CSS-autoprefixing, linting)


#### Инструменты

* Менеджер зависимостей (все доп. библиотеки (ReactDOM, например) и вспомогательные пакеты (Babel, например)). **npm** или **yarn**

* Bundler (сборщик) - чтобы писать код разбитый на модули, а потом объединиить его в небольшое кол-во файлов, т.к. меньше кол-во запросов - оптимальнее для работы браузера. **Webpack**


* Компилятор последних js фич. **Babel + Presets**

* Development Server  - web server, запускаемый локально.



#### Create React App

[create-react-app github](https://github.com/facebook/create-react-app)

```
npx create-react-app react-complete-guide --scripts-version 1.1.5
cd react-complete-guide
npm start
```

IDE - автор использует Microsoft Studio Code


**package.json** - зависимости проекта

react-scripts - содержит все инструменты, которые мы используем в build workflow

Скрипты - 
 * **start**  - запускает сервер для разработки и запускает собранный проект на нем, отслеживает изменения.
 * **build**  - собирает проект в отдельнцю папку, готовую к деплою.

**public** - корневая папка сервера разработки

create react app настроен для создания single page application, поэтому в нем может быть только один html файл

**index.js** - рендерит компоноент App в html-элменент

App испортируется из файла App.js (.js опущен)


**App.js** - содержит реакт-компонент

### Настройки Sublime

В Sublime надо для правильной подсветки:

* установить Babel Snippets череp Package Control
* View > Syntax > Babel > Javascript
Если нет Babel в меню, установить Babel

Чтобы один раз для всего проекта указать какие настройки использовать, нужен пакет Project Specific Syntax Settings.

* Создать проект Project - Add Folder To Project
* Project - Save Project As..
* Открыть js файл; 
  View - Syntax - Babel - Javascript(Babel); 
  Правый клик - Project Specific Syntax - Copy syntax settings;
  Вставить в файл проекта .sublime-project (открывается Project - Edit Project)

Чтобы настройки применялись, надо открывать проект через Project - Open Project - выбрать файл project-name.sublime-project.
Для этого надо сначала создать этот файл через Project - Create Project при открытой папке с проектом.



### Component Basics

Можно отрендерить несколько root components для разных react apps в одном проекте.

Каждый реакт компонент должен рендерить HTML в DOM или возвращать код, который может быть отрендерен.

### JSX

JSX - это синтаксический сахар, он компилируется в вызов ф-ций React.createElement.

В JSX нельзя использовать слова, зарезервированные в js, например 'class'.

JSX выражение внутри return должно содержать единственный корневой компонент.

### Создание компонента

Принято называть файлы с компонентами с большой буквы и помещать их в отдельную папку с таким же имененм.


### Component Props

Можно передаваить параметры в компоненты, как html-атрибуты.

Все атрибуты передаются в один аргумент компонента, который вляется объектом, а атрибуты - его св-ва. 
Его можно назвать как угодно, но лучше - **props**.

### Props.children

 - зарезервированное слово. Содержит любые эл-ты, которые содержаться внутри пользовательского компонента между <Component> и </Component>


### State

 Св-во state можно добавлять в компоненты-классы. В то же время надо стараться как можно чаще использовать компоненты-ф-ции. Это потому что, если у слишком многих компонентов есть state, то приложение становится запутанным и трудно-поддерживаемым.

 state - зарезервированное слово, надо использовать именно его для хранения и управления внутренними данными компонента.

 Особенность state в том, что при его изменении React запускает рендеринг DOM с новыми свойствами.



### Handling Events with Methods

Ф-цию обработчик задают, как метод компонента. Если сделать его стрелочной ф-цией, то this внутри него будет ссылаться на компонент. Если метод-обработчик - обычая ф-ция, то this при вызове из приложения будет undefined. Чтобы this ссылалось на компонент, надо передавая ссылку на обработчик привязать ее к компоненту:

```javascirpt
<button onClick = 'myClickHandler.bind(this)'
```

### To Which Events Can You Listen?

In the last lecture, we saw that you can react to the onClick event - but to which other events can you listen? You can find a list of supported events [here](https://reactjs.org/docs/events.html#supported-events).

### Manipulating the State

Надо вызывать 

```javascirpt
this.setState({})
```

принимает объект, в котором указывают новые знаечения св-в state. Обновляет только те св-ва, которые указаны, не трогая другие.

Реакт следит за state и props и обновляет нужные компоненты в DOM.


### Using the useState() Hook for state manipulation.

До версии React 16.8 нельзя было использовать state в функциональных компонентах, только в компонентах-классах. И это устоявшийся способ разработки на реакт.
С версии 16.8 возможно использовать функциональные компоненты для всего с помощью хуков. Это новый подход, его используют не все и неизвестно, что с ним будет в дальнейшем.


Хуки - это, по сути, коллекция ф-ций, предоставляемая React. И эти ф-ции можно использовать в функциональных компонентах.

Чтобы использовать хуки надо импортироват их.

useState - хук, позволяющий управлять состоянием в функциональных компонентах.

```javascript
import React, { useState } from 'react';
```

useState всегда возвращает массив с двумя элементами:

1.Текущее состояние.
2.Функция, которая позволяет обновить состояние таким образом, что Реакт это увидит и перерендерит нуные компоненты.

Текущее состояние, которое возвращает useState играет роль this.state, используемой в компонентах-классах.
Функция, которую возвращает useState играет роль this.setState, используемой в компонентах-классах.

### Различия исользования React Hooks и компонентов-классов.

Ф-ция для обновления состояния, возвращаемая useState, при вызове полностью заменяет текущее состояние своим аргументом. Поэтому надо вручную следить, чтобы вся информация из старого состояние попала в новое, иначе она потеряется.


#### Решение проблемы

Использовать несколько вызовов useState, по одному для каждой переменной в состоянии. 
Каждая ф-ция useState будет возвращать свою ф-цию, которую надо использовать для изменения конкретной переменной.


#### Stateless и Statefull Components

Statefull (smart, container) - компоненты, имеющие состояние (как классы, так и ф-ции с хуками)
Stateless (dumb, presentational) - компоненты, без состояния

Хорошая практика - использовать как можно больше stateless компонентов. (В небольших приложениях - пара statefull, осатльные - stateless). Это облегчает сопровождение, так как вся логика собрана в одном месте и оттуда распространяется на все приложение.

### Passing Method References Between Components

Есть метод, объявленный в каком-то компоненте. Как вызывать его в другом? 
Надо передать в компонент ссылку на метод, как значение атрибута.

Передача:

```javascript
        <Person
          name = {this.state.persons[2].name}
          myClick = {this.switchNameHandler}
        />
```

Вызов:

```javascript
      <p onClick={props.myClick}>I'm a {props.name} and I'm {props.age} years old</p>
```

Таким образом можно передавать методы, меняющие state из родительского компонента в дочерние и дочерние компоненты смогут вызывать этот метод и повлиять на state родительского, к которому у них нет прямого доступа.


#### Методы с параметрами

```javascript
  switchNameHandler = (newName) => {
    console.log('Was Clicked');
    console.log(this);
    //DON'T DO THIS: this.state.persons[0].name = 'Maximillian';
    this.setState({
      persons: [
        {name: newName, age: 28},
        {name: 'Manu', age: 30},
        {name: 'Stephany', age: 27}
      ]
    });
  }
```

Способы передачи параметров в дочерние компоненты:

1. bind

```javascript
      <button onClick={this.switchNameHandler.bind(this,'Maximillian')}>Switch Name</button>
```

2.

```javascript
      <button onClick={() => this.switchNameHandler('Maximillian!!'))}>Switch Name</button>
```

Здесь стрелочная ф-ция при клике будет возвращать результат выполнения this.switchNameHandler('Maximillian!!').

Способ 1 более эффективный, лучше использовать его. Потому что при втором способе React может перерендерить некоторые части в приложении слишком часто (???)


### Two Way Binding

```javascript
      <input type="text" onChange={props.myChanged} value={props.value}/>
```

Если убрать onChange, то input будет заблокирован, в него нельзя будет ввести значение, т.к. любое введенное значение будет заменятсья на {props.name}



### Стили отдельным файлом

Файл \*.css лучше добавлять в папку компонента и называть так же, как комонент. Эти стили глобальные и видны всему приложению. Поэтому надо задать уникальный класс компоненту и использовать его, чтобы стили не смешивались.

Мы используем webpack и поэтому делаем import css-файлв в js файл компонента, чтобы webpack знал о его существовании обработал. 

Webpack динамически вставит этот css в тег <style></style> в head html-файла.

### Инлайн-стили

Можно записать стили в константу-объект внутри render() или в кастомном компоненте до return().

Это будет js, а не css, поэтому:
* св-ва надо писать в camelCase или в кавычках; 
* значения свойств - в кавычках, через запятую.

```javascript
  render() {
    const myStyle = {
      backgroudColor: 'white',
      font: 'inherit',
      border: '1px solid blue',
      padding: '8px'
    };
    return (
      <div className="App">
        <button
          style={myStyle}
        >
          Switch Name
        </button>
```

В инлайн-стилях трудно использовать все фичи css. Но плюс в том, что стили относятся только к конкретному элементу, который рендериться и не будут влиять на другие элементы. даже если они в том же компоненте.

Есть подход, позволяющий объединить плюсы обоих способов.

В кастомный компонент можно передавать инлайн стили, заданные в родительском компоненте через props.

## Working with List and Conditionals

### Rendering Content Conditionally

В  **JSX** внутри **{}** можно испльзовать **JS**.
Но нельзя использовать сложные выражения, вроде **if {} else {}**.
Можно испольщзовать тернарный оператор.

```javascript
        { this.state.boleanVal ?
            <div>
              ...
            </div> : null
        }
```

После ? тут неявно вызывается React.createElement('<div>...</div>')

Реакт рендерит элементы внутри условия только если условие выполняется.

### Handling Dynamic Content 'JS Way'

Каждый раз, когда Реакт перерендерит компонент, он вызывает метод render(), а не только return().
Поэтому внутри render() перед return() можно задать переменную, котороый присвоить значение с помощью JSX в зависимости от выполнения условий.
В retrun вставить **{имя_переменной}** и она отрендериться в этом  месте.



```javascript
  render() {

    let persons = null;

    if (this.state.showPersons) {
      persons = (
        <div>
          <Person
            style={myStyle}
            name = {this.state.persons[0].name}
            age = {this.state.persons[0].age}/>
          <Person
            name = {this.state.persons[1].name}
            age = {this.state.persons[1].age}/>
        </div>
      );
    }

    return (
      <div className="App">
        <h1>Hi, I am React App!</h1>
        <div>
          <button onClick={this.togglePersonsHandler}>Toggle Persons</button>
        </div>
        {persons}
      </div>
    );
  }
```
Это предпочтительный способ условного рендеринга.

### Outputtting Lists, List and State

Единственный источник информации в приложении - это state.

Чтобы динамически выводить массив из state надо использовать map:

```javascript
  deletePersonHandler = (personIndex) => {
    const persons = this.state.persons;
    persons.splice(personIndex,1);
    this.setState({persons: persons});
  }

  ...
   render() {
  ...

  {this.state.persons.map(person => {
    return <Person
              myClick = {() => this.deletePersonHandler(index)}
              name={person.name}
              age={person.age} />
  })}

  ...
```

В map можно передать стрелочную ф-цию, аргумент которой - эл-т массива. Она выполняется для каждого элемента.

Map преобразет массив в другой массив и если эл-ты массива - jsx, то react попытается отрендерить их по-очереди.

### Updating State Immutably

Недостаток варианта изменения состояния, который показан выше в deletePersonHandler в том, что мы изменяем исходное состояние в операторе 
```javascript 
  persons.splice(personIndex,1);
```
Это происходит, так массивы передаются по ссылке и persons - ссылка на исходный массив.
Это может приводить к ошибкам. Вообще нельзя менять состояние непосредственно, только через setState()
Лучше сделать копию состояния и передавать эту копию в setState.

Сделать копию можно разными способами:

Массив Вариант 1

```javascript 
    const persons = this.state.persons.slice();
```

Массив Вариант 2

```javascript 
    const persons = [...this.state.persons];
```
спред-оператор разбивает исходный массив на эл-ты, которые потом собираются в новый массив.

Объект Вариант 1

```javascript 
    const person = {
      ...this.state.persons[personIndex]
    }
```

Объект Вариант 2

```javascript 
    const person = Object.assign({},this.state.persons[personIndex]);
```

Но эти способы не производят глубокого копирования. Если в массиве или объекте, который копируем есть вложенные массивы или объекты, то они передадутся по сслыке. Чтобы полностью скопировать такой объект, надо вручную произвести глубокое кропирование. 

[https://academind.com/learn/javascript/reference-vs-primitive-values/](https://academind.com/learn/javascript/reference-vs-primitive-values/)

[О глубоком копировании](https://redux.js.org/recipes/structuring-reducers/immutable-update-patterns/#immutable-update-patterns)


### Lists and Keys

Key - важное свойство, которое надо добавлять всегда при работе со списками данных. Key помогает Реакту эффективно обновлять списки. Без него Реакт обнвляет весь список при обновлении одного эл-та, а с key перерендерит только 
измененные эл-ты списка.

В key надо передавать уникальный id эл-та списка. Часто он берется из БД. Значение index массива не очень подходит, т.к. при изменении массива могут меняться и id эл-тов и тогда index не очень поможет Реакт. Но если нет других вариантов, то лучше index, чем ничего.

## Styling React Components & Elements

Проблемы:

1. Инайн-стили ограничены одним эл-том, но нельзя использовать псевдоэл-ты и некоторые другие фичи css. Можно испортировать css-файл, в котором можно использовать все фичи css, но тогда стили будут глобальные. 
Как объединиить плюсы обоих подходов?
2. Как менять стили динамически? Т.е. например делать разные стили при разных состояниях приложения.

### Setting Styles Dynamically

Для инлайн-стилей мы можем изменить переменную в которую записан стиль с помощью js в методe render перед return, и тогда в return()  в jsx, когда  мы вызовем ее в {}, в ней будет измененное значение.


```javascript 
  render() {
    const myStyle = {
      backgroundColor: 'green',
      color: 'white',
      font: 'inherit',
      border: '1px solid blue',
      padding: '8px',
      cursor: 'pointer'
    };
  ...
  if (this.state.showPersons) {
  ...
  myStyle.backgroundColor = 'red';
  }
  return (
    ...
    <button
      style={myStyle}
      onClick={this.togglePersonsHandler}>
        Toggle Persons
    </button>
    ...
    );
```

### Setting Class Names Dynamically

С классами можно также обращаться как с переменными

```javascript 
  render() {
    let classes = [];

    if (this.state.persons.length <= 2) {
        classes.push('red');
    }

    if (this.state.persons.length <= 1) {
        classes.push('bold');
    }
    ...
    return (
        <p className = {classes.join(' ')}>This is really working!</p>
    );
```

### Adding and Using Radium

radium - npm пакет, который позволяет использовать медиа-запросы и псевдоселекторы в инлайн-стилях

В папке проекта:

```
npm install --save radium
```

В файле, где стили:

```javascript
import Raduim from 'radium';
...
export default Radium(App);

```
\- в экспорте мы оборачиваем app в radium, потому что radium - это higher order component


```javascript
  render() {
    const myStyle = {
      backgroundColor: 'green',
      color: 'white',
      font: 'inherit',
      ':hover': {
        backgroundColor: 'lightgreen',
        color: 'black'
      }
    };
...
 if (this.state.showPersons) {
      myStyle.backgroundColor = 'red';
      myStyle[':hover'] = {
        backgroundColor: 'lightred'
      }

  }
```

Чтобы использовать медмазапросы, кейфреймы надо экспортировать еще один компонент Radium - {StyleRoot}. Иначе получим ошибку: ``' To use plugins requiring `addCSS` (e.g. keyframes, media queries), please wrap your application in the StyleRoot component. Component name: `Object`.'``

App.js:

```javascript
import Raduim, {StyleRoot} from 'radium';
...
return(
  <StyleRoot>
  ...
  </StyleRoot>
)
```

### Styled Components

[https://styled-components.com/](https://styled-components.com/)

```
npm install --save styled-components
```

```javascript
import styled from 'styled-components';
```
```javascript
styled.div``
```
вызываем соответствуюий метод для каждого html-элемента. Внутри `` - строка-аргумент для метода (это js синтаксис)
Все такие методы возвращают реакт-компонент, поэтому, если запихивать его в переменную, ее нужно называть с большой буквы.


```javascript
const StyledDiv =  styled.div`
      width: 60%;
      margin: 16px auto;
      border: 1px solid #eee;
      box-shadow: 0 2px 3px #ccc;
      padding: 16px;
      text-align: center;

      &:hover: {
        background-color: lightgreen;
        color: black;
      }

      @media(min-width: 500px) {
        width: 450px;
      }
    `;

...
const person = (props) => {
  return (
        <StyledDiv>
        ...
        </StyledDiv>
  )
}
```
Styled components создают css-классы и добавляют css в head внутри тега <style></style>. Т.е. это не инлайн-стили, что хорошо. (Можно использовать css-каскад (иерархию стилей))

Можно определить styled components в отдельном файле и использовать их потом в нескольких файлах.

### Styled Components & Dynamic Styles

Передать в компонент в качестве параметра переменную, отражающую состояние родительского объекта. И использовать props в аргументе styled.components

```javascript
  const StyledButton = styled.button`
    background-color: ${props => props.alt ? 'green' : 'red'};
  `;

    <StyledButton alt = {this.state.showPersons} onClick={this.togglePersonsHandler}>
        Toggle Persons
    </StyledButton>
```

Styled Components создаст дополнительные классы для разных условий (разных значений props) и будет подставлять нужный класс.

"-" - CSS in JS - следовательно может плохо работать подсветка в IDE и другие фичи, облегчающие написание кода

### CSS Modules

[https://github.com/css-modules/css-modules](https://github.com/css-modules/css-modules)
[Using CSS Modules in create-react-app Projects](https://medium.com/nulogy/how-to-use-css-modules-with-create-react-app-9e44bec2b5c2)

Стили в css-файлах, но область видимости ограничена одним модулем.

Надо настроить конфигурацию и процесс настройки отличается для версий react-scripts 1.* и версий react-script 2.*

```
npm run eject
```
\- дает доступ к конфигам среды разработки. (webpack и пр.)

Появится папка config, в которой есть файлы *webpack.config.dev.js* и *webpack.config.prod.js*.

В этих файлах надо изменить:

```javascript
    {
      test: /\.css$/,
      use: [
        require.resolve('style-loader'),
        {
          loader: require.resolve('css-loader'),
          options: {
            importLoaders: 1,
            modules: true,
            localIdentName: '[name]__[local]__[hash:base64:5]',
          },
        },
    ...
```
В js-файлах компонентов:

```javascript
import classes from './App.css';
```

\- classes - любое имя. Этото объект потом использовать в jsx.


```javascript
  render() {
    ...
    let assignedClasses = [];

    if (this.state.persons.length <= 2) {
        assignedClasses.push(classes.red);
    }

    if (this.state.persons.length <= 1) {
        assignedClasses.push(classes.bold);
    }

    return (
        <div className={classes.App}>
          <h1>Hi, I am React App!</h1>
          <p className = {assignedClasses.join(' ')}>This is really working!</p>
          ...
        </div>
   );
    ...
}
```

При импорте css-modules берет классы из css, дает им уникальные имена и связывает эти новые имена с исходными именами классов в файле. К исходным именам можно обращаться как к свойствам импортированного объекта. (classes.App, например)

Можно сделать глобальный селектор:

```css
:global .Post { ... } 
```
Для версии react-scripts версии 2.* и  выше, можно не делать eject и правки конфигов, достаточно назвать css-файл name.module.css.

## Debugging React Apps


### Dev Tools

[Chrome Devtool Debugging](https://developers.google.com/web/tools/chrome-devtools/javascript/)

**Chrome - Sources**
0. Найти App.js 
0. Найти метод, в котором предполагается ошибка
0. Поставить breakpoint, щелкнув по номеру строки
0. Запустить выполнение и когда оно остановится на breakpoint, надать step-in. Наведя мышку на переменную, можно увидеть ее значение.


**Firefox - Debugger**
см. Chrome


### React Developer Tools

\- расширение для браузера.

Видно компонент, его параметры, его состояние.

Иконка-жучок - Log component data to the conslole.


\- можно посмотреть детальное описание в консоли.

 <> - View Source of Element

 Иконка шестеренки - Settings

 Можно менять значения свойств state прямо в тулзе.

### Using Error Boundaries

[https://reactjs.org/docs/error-boundaries.html](https://reactjs.org/docs/error-boundaries.html)

 Если мы знаем, что во время выполнения может произойти ошибка, то надо обработать ошибку и выдать какое-то понятное сообщение.

 Начиная с Реакт 1ю6 можно создавать error boundary compnonents.

```javascript
import React, { Component } from 'react';

class ErrorBoundary extends Component {
  state = {
    hasError: false,
    errorMessage: ''
  }

  componentDidCatch(error,info) => {
    this.setState({
      hasError: true,
      errorMessage: error
    })
  }

  render() {
    if (this.state.hasError) {
      return (<h1>Something went wrong: {this.state.errorMessage}</h1>);
    } else {
      return (this.props.children);
    }
  }
}

export default ErrorBoundary;
```


Метод **componentDidCatch** сработает, когда компонент, обернутый в error boundary компонент, выдаст ошибку.

**this.props.children** - то, что мы обернули в error boundary component

В return в JSX обернем компонент в error boundary component:

```javascript
return  <ErrorBoundary>
          <Person/>
        </ErrorBoundary>
```

При этом в случае списков, key надо перенести в ErrorBoundary, т.к. это теперь внешний эл-т.

Не надо использовать этот метод для каждого компонента, только для тех, в которых может возникнуть ошибка во врмея выпонения, которую нельзя предотвратить.


## Diving Deeper into Components & React Internals

### Better Project Structure

Можно выделять в отдельный компонент элементы, разметка и поведение которыx переиспользуются много раз в приложении.

Обычно компоненты-контейнеры, управляющие состоянием, вроде app.js не должны рендерить слишком много. В их render - методе не должно быть много JSX.

Можно создать отдельные компоненты для списков, в них передавать список и делать map и ренденринг списка.

### Splitting an App Into Components

Стили относящиеся к коспоненту не должны сожержать селекторы других компонентов - родительских например. Иначе не сработает, т.е. уникальные идентификаторы, сгенерированные css-modules не будут совпадать.

### Comparing Stateless and Stateful Components

Statefull, компоненты-контейнеры - содержат state и изменяют его (с помощью setState для классов и useState-хука для ф-ций). До версии 16.8 stateful могли быт только копомненты-классы. Начиная с 16.8 - и компоненты-функции с помощью хуков.

Stateless, dumb, презенетационные - не содержат state, могут влиять на state только с помощью переданных в параметры методов родительского statefull компонента.

Большинство компонетов в приложении должны быть презентанционными. Это делает приложение легко управляемым, потому что есть предсказуемый поток данных, всегда понятно, где изменяется состояние, т.к. компонентов с состоянием не много.

А презентационные компоненты нужны только для рендеринга интерфейса и зависят только от props, поэтому их работа предсказуема, их можно поместить куда угодно в приложение и они будут работать, если задать им правильные входные данные.

В итоге легче сопровождать приложение.

### Class-based vs Functional Components

***Class-based***

```
class XY extends Component
```

* extneds объект Component из React
* могут содержать state, изменяют state с помощью setState()
* могут использовать LifeCycle Hooks
* для доступа к state,props, методам надо использовать клчевое слово 'this', т.к. props и пр. - это св-ва объекта.

***Functional***

```
const XY = props => {}
```

* ф-ции, которые принимают параметры и возвращают JSX
* могут содержать state и изменять его с помощью useState() (это хук, хуки доступны с версии 16.8)
* НЕ могут использовать LifeCycle Hooks
* можно непосредственно обращаться к props, т.к. это просто аргумент ф-ции

Даже в последних версиях Реакт можно использовать classs-based components только для statfull, а fucntional components для stateless компонентов. Чтобы разница между ними была наглядней.


### class Component Lifecycle Overview

\- доступен только в компонентах-класса

Есть набор методов, которые можно вызвать в компоненте и они сработают в определенные моменты времени.

Их можно использовать, например, чтобы вставить данные, полученные по сети, или почистить что-нибудь перед удалением кмопонента из DOM.

Lifecycle Hooks можно разделить на те, которые вызываются при рендеринге компонента первый раз и на те, которые вызываются, когда в компоненте что-то меняется.

**Lifecycle Hooks при создании компонента:**

1. constructor(props)

На самом деле это не Lifecycle Hook, а особенность ES6 классов. Констурктор получает props компонента. Если мы пишем свой constructor, то в нем надо вызывать super(props).
Используется, чтобы сделать что-то для инициализации, например, задать начальное состояние (это может быть нужно, если начальное состояние зависит от параметров). Нельзя в нем делать что-то, что вызывает side effects (нампример, посылать http-запрос, сохранять что-то в local storage, посылать google analytics), потому что эти действия могут вызывать лишний re-rendering и понизить производительность приложения.

На самом деле state, который мы орпеделяем в class-based component неявно вызывается в constructor(). Можно поместить задание state в constructor(), если мы вызовем его явно.

```javascript
  constructor(props) {
    super(props);
    this.state = {
    persons: [
      {id: 'asdaf1', name: 'Max', age: 28},
      {id: 'asdad3', name: 'Manu', age: 30},
    ],
    otherState: 'some other value',
  }
}
```

2. getDerivedStateFromProps(props, state)

Появился в Реакт 16.3.
Используется редко, когда при изменении параметров, надо изменить внутреннее состояние компонента. 
Нельзя в нем делать, то, что вызывает side effects.
Static method.
Должен возвращать измененное state.

```javascript
  static getDerivedStateFromProps(props, state) {
    console.log('[App.js] getDerivedStateFromProps', props);
    return state;
  }
```

Используется например в формах, в компоненте, который проверяет пользовательский ввод и его входные параметры изменяются, когда пользователь что-то вводит в форму.

3. render()

 - преобразует JSX в HTML

 В нем нельзя отправлять http-запросы, устанавливать timeouts, ничего, что может заблокировать rendering.
 Если запускается render, это еще не значит, что ре-рендериться реальный DOM. Он запускается, когда Реакт обновляет виртуальный DOM и смотрит, что надо перерендерить в реале.

4. render child components

5. componentDidMount()

Очень важный lifecycle hook. Используется часто. В нем можно вызывать side effects. (HTTP запросы, например)
В нем не надо менять состояние и вызывать setState() (запускает re-rendering), кроме некоторых случаев, например, когда в блоке then промиса после отправки htttp реквеста, т.е. можно изменить что-то в будущем, наComponent Creation Lifecycle in Actionпример, когда придет запрос. Но синхронно измененять state нельзя, сразу после того, как будет вызован componentDidMount().

* componentWillMount() - будет скоро удален, хотя пока можно использовать. Вместо него можно использовать getDerivedStateFromProps во многих случаях.



### Component Update Lifecycle (for props Changes)

1. getDerivedStateFromProps(props, state)

2. shouldComponentUpdate(nextProps, nextState)

Позволяет отменить процесс обновления.
Используется для Performance Optimization (оптимизации производительности).
Использовать осторожно, т.к. можно повредить компонент при неправильном прерывании.

Должен возвращать true, если надо продолжить обновление и false, если надо остановить.

3. render()

4. Update Child Components Props

Если дочерние компоненты получают новые параметры, они тоже проходят через lifecycle обновления.

5. getSnapshopBeforeUpdate(prevProps, prevState)

Используется редко.
Используется для last-minute DOM операций, но не для обновдения DOM. Можно использовать, например, для получения текущей позиции скролла. когда в DOM появляются новые элементы, но надо сохранить пользователя в той же позиции. Тогда с помощью этого метода можно получить состояние системы перед обновдением и оттуда взять все что надо.

Он сохраняет данные, которые потом передаются в componentDidUpdate() в качестве третьего аргумента и там их можно использовать.

```javascript
  getSnapshotBeforeUpdate(prevProps, prevState) {
    console.log('[Persons.js] getSnapshotBeforeUpdate');
    return {message: 'Snapshot!'};
  }

  componentDidUpdate(prevProps, prevState, snapshot) {
    console.log('[Persons.js] componentDidUpdate');
    console.log(snapshot);
  }
```

6. componentDidUpdate()

Обновление закончено. Можно вызывать side-effects.
Надо следить за тем, чтобы не вызвать бесконечный цикл. Если, например, http-запрос вызовет обновление параметров.
Нельзя синхронно обновлять состояние и вызывать setState() вне then блока промиса, ожидающего запрос или другой асинхронной задачи.
Используется чаще всего, когда, например, надо получить данные с сервера.

Устаревшие методы:

componentWillReceiveProps(props) {}

componentWillUpdate() {}

\- больше не используются так как оказались не удобными и часто использовались не правильно. Но могут работать в старых приложениях.

### Using useEffect() in Functional Components (Аналог Lifecycle Hooks в Class-based components)

```javascript
import React, { useEffect } from 'react';

const cockpit = (props) => {

  useEffect(() => {
    console.log('[Cockpit.js] useEffect');
  })

  ...
}
```

Его аргумент - функция, которая запускается каждый цикл рендеринга.
В нем можно делать все, что и в componentDidUpdate и в componentDidMount (http-запросы и пр.)

Вместо getDerivedStateFromProps можно запустить useState() и в нем обновить состояние для новых значений props.

### Controlling the useEffect() Behavior


Что если мы не хотим, чтобы useEffect() запускался при каждом цикле ре-рендеринга?
Например, мы посылаем даннные в облако, только при изменении persons.
Для этого надо добавить второй аргумент в useEffect() - массив со всеми данными, которые используются в этой ф-ции.
Можно использовать useEffect несколько раз для разных данных.

```javascript
  useEffect(() => {
    console.log('[Cockpit.js] useEffect');
    setTimeout(() => {
      alert('Send data to cloud');
    },1000)},
    [props.persons]
  );
```
\- setTimeout() - здесь для эмуляции задержки перед возвращением http-запроса

Если мы хотим выподнить что-то только при создании компонента, то надо передать вторым аргументом пустой массив. Это значит у useEffect() нет зависимостей при изменеиии которых он должен перезапускатьсяи следовательно он запустится только в первый раз.

```javascript
  useEffect(() => {
    console.log('[Cockpit.js] useEffect');
    setTimeout(() => {
      alert('Send data to cloud');
    },1000)},
    []
  );
```


### Cleaning up with Lifecycle Hooks & useEffect()

Когда элемент удаляется из DOM надо почистить лишнее - например eventListenres. Это важно в компоентах, которые подсоединяются к серверу.

*** В class-based components: ***

componentWillUnmount

Запускается перед тем как компонент удаляется из DOM.

*** В  functional components ***

useEffect()

Если в useEffect со вторым аргументом - пустым массивом, в первый аргумент (ф-цию) добавитьreturn, который возвращает функцию, то эта ф-ция будет запущена перед основной ф-ции useEffect, но только после первого цикла рендеринга. В итоге она будет запущена после удаления компонента.

```javascript
  useEffect(() => {
      console.log('[Cockpit.js] useEffect');
      setTimeout(() => {
        alert('Send data to cloud');
      },1000);
      return ()=>{
        console.log('[Cockpit.js] Clean up work in UseEffect()');
      };
    },
    []
  );
```

Если не передавать второй аргумент, то ф-ция из return будет запускаться каждый раз перед последующим запуском useEffect.
Это можно использовать для отмены операций, которые должны быть отмпнены, когда компонент ре-рендериться, точнее, после того, как он обновлен.


### Cleanup Work with useEffect() - Example

Если в предыдущем примере useEffect() сразу после загрузки приложения удалить компонент, то alert все равно появится. Его можно отменить:

```javascript
  useEffect(() => {
      console.log('[Cockpit.js] useEffect');
      const timer = setTimeout(() => {
        alert('Send data to cloud');
      },1000);
      return () => {
        clearTimeout(timer);
        console.log('[Cockpit.js] Clean up work in UseEffect()');
      };
    }, []
  );
```
### Using shouldComponentUpdate for Optimization

По умолчанию, когда в родительском компоненте что-то меняется, запускается метод render() и перерендерится все, что есть в этом методе. В том числе те, компоненты, которые не были затронуты изменениями.
(Имеется ввиду перерендерится виртуальный DOM, который Реакт строит, чтобы потом сравнить с реальным DOM и обновить то, что изменилось в реальном DOMе)

Можно предотвратить рендеринг компонента, если в shouldComponentUpdate проверить, что изменилось.

```javascript
  shouldComponentUpdate(nextProps, nextState) {
    console.log('[Persons.js] shouldComponentUpdate');
    if (nextProps.persons === this.props.persons) {
      return false;
    }
    return true;
  }
```
Сравнение массивов тут работает, потому что в app.js при изменении эл-та persons мы создаем новый массив, копируя старый, изменяем в нем что надо и присваиваем св-ву persons новый измененый массив. Поэтому ссылка на массив всегда новая при любых изменениях в нем.

https://academind.com/learn/javascript/reference-vs-primitive-values/


В Chrome можно посмотреть вкладку Rendering - Paint Flash - подсвечивает зеленым то, что рендерится в реальном DOM.


### Optimizing Functional Components with React.memo()

```javascript
export default React.memo(cockpit);
```

Реакт делает снимок компонента и ререндерит его только если изменились входные параметры. Если родительские компонент хочет перерендерить наш компонент, но входные параметры не изменились, Реакт отдает родительскому снимок компонента.


В нашемслучае компонент все равно перерендеритс при изменениии persons.name, потому что мы передаем в него persons, хотя фактически мы проверяем только persons.length. Если передавать в качестве параметра this.persons.length, то он будет изменяться только при изменении persons.lenght.

memo делает только поверхностное сранвение. Чтобы сравнить вручную, надо использовать сторой параметр memo - ф-цию сравнения.
В отличие от shouldComponentUpdate эта ф-ция должна вернуть false, чтобы компонет перерендерился.

```javascript
function MyComponent(props) {
  /* render using props */
}
function areEqual(prevProps, nextProps) {
  /*
  return true if passing nextProps to render would return
  the same result as passing prevProps to render,
  otherwise return false
  */
}
export default React.memo(MyComponent, areEqual);
```
https://reactjs.org/docs/react-api.html#reactmemo

memo не влияет на state или context, сравнивает только props

### When should you optimize?

Проверять обновление компонента с помощью shouldComponentUpdate или React.memo надо только если компонент не всегда должен обновляться при обновлении родителя. Бывают компоненты, которые при обновлении родителя обнвляются всегда или почти всегда, в них такие проверки не нужны, т.к. это выполненине лишнего кода и будеыт только замедлять приложение.

###  PureComponents instead of shouldComponentUpdate

Если в class-based component мы используем shouldComponentUpdate только для проверки не изменился ли каждый параметр, то можно вместо использования shouldComponentUpdate унаследовать класс от PureComponents.

```javascript
import React, {PureComponent} from 'react';

class Persons extends PureComponent {
  ...
}
```
### How React Updates the DOM

1.render()

\- этот метод не рендерить сразу в реальный DOM. Он предлагает конечный вариант HTML, но этот вариант может соврадать с тем, что уже есть в реальном DOM. Поэтому мы используем shouldComponentUpdate. Но даже если мы его не используем или несмотря на изменение переменной результат тот же, что и уже есть, все равно перендеринга реального DOM сразу не произойдет.

* Сначала происходит сравнение виртуальных DOM - старого и нового. Реакт хранит 2 виртуальных DOM. 
* Если найдены различия, Реакт обновляет реальный DOM, но не полностью. Рендерятся только места, которые изменились. Например, если изменился текст конопки, Реакт обновляет только текст и не производит ре-рендеринг всей кнопки. 
* Если различий не найдено,  Реакт не трогает раельный DOM.

(Это относится и к компонентам-функциям, возвращающим JSX)



### Rendering Adjacent JSX Elements

* JSX, который возвращают компоненты, должен быть упакован в один внешний элемент. 
* Исключение - списки, в которых рендерятся несколько последовательных элементов, но у каждого должно быть свойство key, чтобы Реакт мог эффективно изменять и перемещать их.
* 1. Можно обернуть JSX в return в [] и после каждого элемента поставить запятую. Тогда Реакт воспримет это все как список и будт требовать key.

```javascript
    return [
        <p key="i1" onClick={this.props.myClick}>I'm a {this.props.name} and I'm {this.props.age} years old</p>,
        <div key="i2">{this.props.children}</div>,
        <input key="i3" type="text" onChange={this.props.myChanged} value={this.props.name}/>
    ]
```

* 2. Можно создать компонент-обертку, которая не будет рендериться.

```javascript
import React from 'react';

const aux = props => props.children;

export default aux;
```

\- тут можно даже не использовать import, т.к. мы не используем JSX, только JS.

```javascript
    return (
      <Aux>
        <p onClick={this.props.myClick}>I'm a {this.props.name} and I'm {this.props.age} years old</p>
        <div >{this.props.children}</div>
        <input type="text" onChange={this.props.myChanged} value={this.props.name}/>
      </Aux>
    )
```

props.children будет ссылаться на все содержимое между открывающимся и закрывающимся тегом элемента. Требование оборачивать все в один внений элемент - это требование JS, т.к. все это подставляется в React.createElement и там должен быть только один элемент.


### Using React.Fragment

В Реакт >= 16.2 есть встроенный 'aux' компонет (обертка, которая не рендерится).

```javascript
import React, {Fragment} from 'react';

    return (
      <Fragment>
        <p onClick={this.props.myClick}>I'm a {this.props.name} and I'm {this.props.age} years old</p>
        <div >{this.props.children}</div>
        <input type="text" onChange={this.props.myChanged} value={this.props.name}/>
      </Fragment>
    )
```

### Higher Order Components (HOC) - Introduction

\- это компонент, который не содержит собственную логику, стили, разметку, а оборачивает другой компонент, может добавлять в другой компонент какую-то логику, стили, разметку.
Их принято называть начиная с With
Таким образом создавать лучше компоненты, которые добавляют html и стили.

Примеры:

1.Aux - см.выше

2.Компонент, который добавляет класс. (Хотя он не особо нужен в реале, просто пример)

### Another Form of HOCs

В другом варианте HOC component принимает в качестве первого аргумента - WrappedComponent (должен начинаться с заглавной), второй bи последующие аргументы зависят от того, какие еще входные данные нужны  этому hoc component.

В этом случае HOC component - обычная js-функция, а не fucntional component, потому что нет props и она не возвращает JSX.
Но эта ф-ция должна возвращать functional component.

```javascript
import React from 'react';

const withClass = (WrappedComponent, className) => {
  return props => (
    <div className = {className}>
      <WrappedComponent />
    </div>
    );
};

export default withClass;
```

Импортируем ее в переменную с маленькой буквы, потому что это не компонент, а ф-ция возвращающая компонент.
И в вызываем ее с аргументом - нужным компонентом.

```javascript
import withClass from '../hoc/WithClass';
...
export default withClass(App,classes.App);
```

Этот способ больше подходит для компонентов, которые вносят какую-то логику.

### Passing Unknown Props

При экспорте компонента, обернутого в HOC, мы экспортируем результат выполнения hoc, то все переменные, которые мы передаем в компонент (который потом где-то испортировали) попадают в props функции, возвращаемой hoc. Реакт атоматически форирует изо всех аргументов, переданных в компонент, объект props со свойствами, каждое из которых - одна переданная переменная.
Чтобы передать список аргкментов, надо использовать {...props}

```javascript
const withClass = (WrappedComponent, className) => {
  return props => (
    <div className = {className}>
      <WrappedComponent {...props} />
    </div>
    );
};
```

### Setting State Correctly

Для class-based components.

Неправильный вариант

```javascript
   this.setState({ persons: persons, changeCounter: this.state.changeCounter + 1 })
```

Мы вызываем setState() синхронно и React ставит ее в очередт и выполняет, когда появятся ресурсы. Это может происходить не сразу для больших приложений. Поэтому this.state, на которое мы ссылаемся, может быть не самым последним предыдущим состоянием. Это может быть более старое состояние. setState может вызываться почти одновременно в разных частях приложения и setState, который вызван поздннее, может выполниться раньше и получить неактуальные данные в this.state.

Это играет роль только для обновления состояния значениями, которые зависят от старого состояния. Если новые значения - это пользовательский ввод и не зависят от предыдущего состояния, то не страшно.

```javascript
    this.setState(
      (prevState, props) => {
      return { persons: persons,
          changeCounter: prevState.changeCounter + 1
        }
    });
```

Это best practice для вызвова setState, когда оно зависит от предыдущего сотояния.

Объяснение почему так - https://stackoverflow.com/questions/48563650/does-react-keep-the-order-for-state-updates/48610973#48610973
https://css-tricks.com/understanding-react-setstate/

Похоже это потому, что так setState() будут всегда вызываться последовательно в нужном порядке.

### Using PropTypes

Хорошо бы по компоненту было понятно, какие параметры он использует и какого они типа. И в случае передачи неподоходящих параметров выдавать ошибку.

Это можно сделат с помощью дополнительного пакета.

```javascript
npm install --save prop-types
```

\- этот пакет часть Реакт, но не в ядре и устанавливается опционально.

```javascript
import PropTypes from 'prop-types';

Person.propTypes = {
  myClick: PropTypes.func,
  name: PropTypes.string,
  age: PropTypes.number,
  myChanged: PropTypes.func
};
```
Благодаря этому пакету, Реакт в режиме разработки будет следить, чтобы передаваемые параметры были правильными.

https://ru.reactjs.org/docs/typechecking-with-proptypes.html

### Using Refs

К любому html-элементу можно добавить ключевое слово ref.

1. Анонимная ф-ция

```javascript
    return (
      <Aux>
        <input
          type="text"
          ref = {() => {(inputEl) => {this.inputELement = inputEL}}
          onChange={this.props.myChanged}
          value={this.props.name}/>
      </Aux>
    )
```

Если передать в ref функцию, то в качестве первого аргумента в нее передана ссылка на элемент. И можно с помощью this присвоить ее свойству компонента и использовать где угодно в приложении.

```javascript
  componentDidMount() {
    this.inputELement.focus();
  }
```

2. Начиная с версии 16.3.

```javascript
  constructor(props) {
    super(props);
    this.inputElementRef = React.createRef();
  }
  ...
  componentDidMount() {
    this.inputElementRef.current.focus();
  }
  ...
    return (
      <Aux>
        <input
          type="text"
          ref = {this.inputElementRef}
          onChange={this.props.myChanged}
          value={this.props.name}/>
      </Aux>
    )
```

### Refs with React Hooks

В functional component можно использовать ref только в варианте 2.

```javascript
  const toggleBtnRef = useRef(null);

  useEffect(() => {
      toggleBtnRef.current.click();
    }, []
  );
 ...
   return (
    <div>
      <h1>{props.title}</h1>
      <button
        ref = {toggleBtnRef}
        className = {btnClass.join(' ')}
        onClick={props.clicked}>
          Toggle Persons
      </button>
    </div>
  );
```

### Understanding Prop Chain Problems

Позволяет избежать длинной цепочки передачи параметров

Допустим мы изменяем состояние в одном компоненте, причем состояние должно отражаться в компоненте, который непосредственно не вызывается в компоненте-контейнере. Оно тогда передается через другой компонент. Это не очень удобно.
Есть фича Context, которая помогает пропустить промежуточные компоненты при переаче параметра во вложенный.

### Using the Context API

```javascript
import React from 'react';

const authContext = React.createContext({});

export default authContext;
```

Context - по сути глобально доступный js объект, но где именно он доступен решаем мы. Его значением может быть не только объект, но и массив, строка, число. Он используется для передачи параметров между компонентами без использования props.
Можно инициализировать в context начальные значения, чтобы потом работало автодополнение в IDE, но не обязательно. Значения по умолчанию будут передаваться, если других значений не будет задано.


В компоненте, из которого передаем значения context:
```javascript
import AuthContext from '../context/auth-context.js';
...
    return (
        <Aux>
        <button onClick = {this.removeCockpit}>Remove Cockpit</button>
          <AuthContext.Provider value={{
            authenticated: this.state.authenticated,
            login: this.loginHandler
            }}>
            {cockpit}
            {persons}
          </AuthContext.Provider>
        </Aux>
    );
```

Импортированный компонент с context должен оборачивать все компоненты в которых мы хотим иметь к нему доступ.

В компоненте, в который передаем context:
```javascript
import AuthContext from '../../../context/auth-context';
...
    return (
      <Aux>
        <AuthContext.Consumer>
          {(context) => context.authenticated ? <p>Authenticated!</p> : <p>Please log in!</p>}
        </AuthContext.Consumer>
        <p onClick={this.props.myClick}>I'm a {this.props.name} and I'm {this.props.age} years old</p>
        <div >{this.props.children}</div>
        <input
          type="text"
          ref = {this.inputElementRef}
          onChange={this.props.myChanged}
          value={this.props.name}/>
      </Aux>
    )
```

\- здесь мы обернули JXS в <AuthContext.Consumer>, но он не примнимает JSX код как дочерний, а принимает ф-цию, в аргументе которой - context и которая возвращает JSX. Все обернем в {}, т.к. это JS-код.

### contextType & useContext()

Альтернативный способ использования context в class-based components
Предыдущий способ дает доступ к занчениям только в JSX коде, который обернут в context компонент. Но эти значения могут понадобится, например, в Life Cycle методах компонента.


Нужно задать в class-based component св-во:

```javascript
import AuthContext from '../../../context/auth-context';
...
static contextType = AuthContext;
...
  componentDidMount() {
    console.log(this.context);
  }
```
Имя точно такое. static - это св-во доступно извне компонента.

```javascript
    return (
      <Aux>
        {this.context.authenticated ? <p>Authenticated!</p> : <p>Please log in!</p>}
      </Aux>
    )
```

В functional components можно использовать хук useContext

```javascript
import React, { useEffect, useRef, useContext } from 'react';
import AuthContext from '../../context/auth-context';
...
  const authContext = useContext(AuthContext);
...
      <button onClick={authContext.login}>Log in</button>
```

Если через контекст передавать объект, то дочерние компоненты будут перерисованы, даже если объект не изменился, т.к. Provider создает какждый раз новый объект, а объекты сравниваются по ссылке.

Чтобы избежать перерисовки, надо положить объект в state.

https://learn-reactjs.ru/core/context#394

Если надо в качестве значения state присвоить метод, то надо определить метод до state, либо присвоить значение state в constructor.

```javascript
  increaseFirst = () => {
    ...
  }

  state = {
    numbers: {
      first: 1,
      second: 10,
    },
    numContextValue: {increaseFirst: this.increaseFirst}
  }


  render() {
    return (
      <div className="App">
        <Num.Provider value = {this.state.numContextValue}>
          <NumberControls/>
        </Num.Provider>
      </div>
    );
  }
```

### Useful Resources & Links

[More on useEffect()](https://reactjs.org/docs/hooks-effect.html)

State & Lifecycle: https://reactjs.org/docs/state-and-lifecycle.html

PropTypes: https://reactjs.org/docs/typechecking-with-proptypes.html

Higher Order Components: https://reactjs.org/docs/higher-order-components.html

Refs: https://reactjs.org/docs/refs-and-the-dom.html

## A Real App: The Burger Builder (Basic Version)

### Planning an App in React - Core Steps

1.Component Tree / Component Structure

\- этот план может менятся по мере разработки приложения

2.Application State (Data)

3.Components vs Containers

Какие компоненты будут stateless а какие statefull.

### Planning the State

Чтобы решить на каком уровне делать state, надо определить к какому компоненту данные отнсятся и влияют. Надо учитывать, что могут появится в будущем другие компоннты с другими данными и поэтому надо подумать, прежде чем запихивать все данные в App. 

О том, использовть ли PureComponent или shouldComponentUpdate лучше решить в процессе рзаработки, когда будет видно, где стоит оптимизировать цикл обновления.

### Creating a Layout Component

Можно разделить сожержимое layout на две части:

1. Навигация - toolbar, sidedrawer, backdrop
2. Содержимое страницы - burger builder

Потому что навигация всегда на странице, а содержимое может менятся при навигации по страницам приложения.

## Reaching out to the Web (Http / Ajax)

### Understanding Http Requests in React

В single page application frontend и backend разделены и они не могут обмениваться информацией как в multi page - через html.
В SPA фронтенд и сервер обмениваются информацией в виде json.
Обычно сервер содержит RESTful API.

### Understanding our Project and Introducing Axios

https://jsonplaceholder.typicode.com/
- можно использовать для тестирования, если нет сервера.

Способы отправить запрос:
* XMLHttpRequest - js объект, с его помощб можно составлять ajax-запросы, отпарвлять их на сервер и обрабатывать ответ. Но он довольно громоздкий в использовании.
* Сторонняя библиотека. Например, Axios.https://github.com/axios/axios . Можно использовать где угодно, не только в Реакт.

```javascript
import axios from 'axios';
```

### Creating a Http Request to GET Data


Нельзя просто присвоить результат выполнения ф-ции, делающей http запрос, переменной.
http-запросы выполняются асинхроннно, т.е. должно пройти какое-то время после отправки запроса, через которое будет получен ответ.
А js выполняет код синхронно. Т.е. при присвоении занчения переменной сразу должна выполняться правая часть оператора присвоения.
Поэтому axios использует промисы и axios.get возвращает промис.


```javascript
    componentDidMount() {
        console.log('[Blog] componentDidMount');
        const posts = axios.get('https://jsonplaceholder.typicode.com/posts')
            .then(response => {
                console.log(response);
            })
        console.log(posts);
    }
```

then - метод с аргументом - функцией, которая выполняется, когда промис выполнится (в нашем случае - когда запрос вернется). 
Axios передает возвращенные данные в параметр response этой ф-ции.

### Rendering Fetched Data to the Screen

Response надо обрабатывать в then(), а не после axios.get. Потому что все операторы после axios.get js выполнит сразу, не дожидаясь возвращения промиса.

```javascript
    const posts = axios.get('https://jsonplaceholder.typicode.com/posts')
      .then(response => {
          this.setState({posts: response.data})
      })
...
    render () {
        const posts = this.state.posts.map(post => {
          return <Post key={post.id} title={post.title}/>
        })
    ...
    }
...
```


### Transforming Data

Данные возвращенные с сервера можно обработать в ф-ции-аргументе then с помощью js.

```javascript
   componentDidMount() {
    const posts = axios.get('https://jsonplaceholder.typicode.com/posts')
      .then(response => {
        const posts = response.data.slice(0,4);
        const updatedPosts = posts.map(post => {
            return {
                ...post,
                author: 'Max'
            }
        })
        this.setState({posts: updatedPosts});
      })
    }
...
```

###  Fetching Data on Update (without Creating Infinite Loops)

Если в ComponentDidMount добавить setState то можно уйти в бесконечный цикл запросов. Поэтмоу перед http-запросом надо проверять, надо ли его выполнять.
Например, выполнять запрос только когда переданы параметры для запроса, при этом запрос либо еще не далался либо по делалася, но параметры запроса изменились.

```javascript
    componentDidUpdate() {
        if (this.props.id > 0 && (!this.state.loadedPost || this.state.loadedPost.id !== this.props.id)) {
            const post = axios.get('https://jsonplaceholder.typicode.com/posts/' + this.props.id)
                .then(response => {
                      this.setState({loadedPost: response.data});
                })
        }
    }
```

### Adding Interceptors to Execute Code Globally

Interceptors - глобальные ф-ции в axios, которые вызываются для любого запроса от приложения и для любого ответа в приложение.
Можно применять, например, для установки общих header (например, authorization header) или для сохранения лога ответов или для обработки ошибок глобально.

В index.js:

```javascript
axios.interceptors.request.use(request => {
  // Edit request config
  return request;
}, error => {
  return Promise.reject(error);
})
```
 - этот интерсепор обрабатывает только запросы.


Так мы регистрируем новый interceptor.
Здесь request - это конфигурация
Все импорты axios в приложении пользуются одной конфигурацией. Поэтому можно задать конфигурацию в одном месте и она будет использоваться везде.

Первая ф-ция обрабатывает успешный request и должна возвращать request, иначе все запросы заблокируются и будет ошибка
Можно внутри отредактировать request, добавить хедеры, например. Интерсептор быдет работать для всех запросов во всем приложении.

Можно передать в интерсептор вторую ф-цию, которая будет обрабатывать ошибки. Эта ф-ция должна вернуть Promise.reject(error); 
чтобы вернуть ошибку в компонент, который отправил запрос и там ее можно обработать с помощью catch. Это имеет смысл, когда в разных компонентах надо сделать что-то свое, но при этом еще и обработать ошибку глобально, например, занести в лог.

Интерептор для ответов

```javascript
axios.interceptors.response.use(response => {
  // Edit request config
  return response;
}, error => {
  return Promise.reject(error);
})
```

### Removing Interceptors

You learned how to add an interceptor, getting rid of one is also easy. Simply store the reference to the interceptor in a variable and call eject  with that reference as an argument, to remove it (more info: https://github.com/axios/axios#interceptors):

```javascript
    var myInterceptor = axios.interceptors.request.use(function () {/*...*/});
    axios.interceptors.request.eject(myInterceptor);
```


### Setting a Default Global Configuration for Axios

Иногда надо установить глобальные паарметры для всех запросов. Например, адрес сервера.

```javascript
axios.defaults.baseURL = 'https://jsonplaceholder.typicode.com';
```

Тогда в запросах можно не указывать начало url, заданное в baseURL, а только остальную часть.

```javascript
        const posts = axios.get('/posts')
```

Можно задать параметры header для всех типов запросов:

```javascript
axios.defaults.headers.common['Authorization'] = 'AUTH TOKEN';
```

Можно задать параметры header только для post, например:


```javascript
axios.defaults.headers.post['Content-Type'] = 'application/json';
```

### Creating and Using Axios Instances

Допустим мы хотим использовать разные глобальные параметры axios для разных частей приложения.
В этом случае можно использовать instances.

Надо создать axios.js в той же папаке, что и index.js. 
Ф-ция axios.create создает инстанс axios, т.е. копию объекта axios. Таких копий можно создать несколько.
Можно в объекте задать параметр по-умолчанию, параметры заголовка только для этого инстанса.
Можно добавить интерсепторы

```javascript
import axios form 'axios';

const instance = axios.create({
  baseURL: 'https://jsonplaceholder.typicode.com'
});

instance.defaults.headers.common['Authorization'] = 'AUTH TOKEN FROM INSTANCE';

//instance.interceptors.request.use

export default instance;
```

В импорте файла, в котором хотим использовать инстанс:

```javascript
import axois from '../../axios';
```

## Section 10: Burger Builder Project: Accessing a Server

## Questions

1.Что если у меня в App.js вызывается много одинаковых компонентов, их состояние храниться в массиве и мне надо изменить значение и перерендерить только один компонент? Как это правильно сделать?

Вроде как, если есть key и список однотипных элементов,то Реакт перерендерит только измененные компоненты, хотя в setState передается весь массив.


2.Как понять, что реакт перерендирит, а что нет? Например при использовании списков, и изменении одного пункта, как убедиться, что он перерендирит только измененные пункты списка?


Можно выводить отладочные сообщения в lifecycle hooks.

Вот здесь - [https://habr.com/en/post/319536/](https://habr.com/en/post/319536/) описано Профилирование компонентов с помощью Timeline в Chrome


3.Как в shouldComponentUpdate происходит сравнение массивов и объектов? Ведь вроде как они передаются по ссылке и сравниваются ссылки?

Поскольку мы используем immutable изменение, то при любом изменении в свойство записывается новый массив.


4.При использовании css-modules при повтроном использовании блока получается, что нельзя добавить ему класс, не используя параметры. Может быть в каждом компоненте добавлять props.class и использовать его в className? Нормальная ли это практика?


```javascript
<div className = {classes.Toolbar}>
  <Logo addclass = {classes.Logo}/>
</div>
```

```javascript
const Logo = props => {

  console.log(props.addclass);

  const classnames = [classes.Logo];
  if (props.addclass) {
    classnames.push(props.addclass);
  }

  console.log(classnames);

  return (
    <div className={classnames.join(' ')}>
      <img src={burgerLogo} alt='MyBurger'/>
    </div>
  );

}
```