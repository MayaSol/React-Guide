# React - The Complete Guide (incl Hooks, React Router, Redux) 

* [1. Getting Started](#getting-started)
* [2. JavaScript ES6](#javascript-es6)
* [3. The Basics](#the-basics)
* [4. Working with List and Conditionals](#working-with-list-and-conditionals)
* [5. Styling React Components & Elements](#styling-react-components-&-elements)
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
  Вставить в файл проекта .sublime-project

Чтобы настройки применялись, надо открывать проект через Project - Open Project - выбрать файл project-name.sublime-project.



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


### Lists and Keys

Key - важное свойство, которое надо добавлять всегда при работе со списками данных. Key помогает Реакту эффективно обновлять списки. Без него Реакт обнвляет весь список при обновлении одного эл-та, а с key перерендерит только 
измененные эл-ты списка.

В key надо передавать уникальный id эл-та списка. Часто он берется из БД. Значение index массива не очень подходит, т.к. при изменении массива могут меняться и id эл-тов и тогда index не очень поможет Реакт. Но если нет других вариантов, то лучше index, чем ничего.

## Styling React Components & Elements

Проблемы:

1. Инайн-стили ограничены одним эл-том, но нельзя использовать псевдоэл-ты и некоторые другие фичи css. Можно испортировать css-файл, в котором можно использовать все фичи css, но тогда стили будут глобальные. 
Как объединиить плюсы обоих подходов?
2. Как менять стили динамически? Т.е. например делат разные стили при разных состояниях приложения.

### Setting Styles Dynamically

Для инлайн-стилей мы можем изменить переменную в котрую записан стиль с помощью js в методe render перед return, и тогда в return()  в jsx, когда  мы вызовем ее в {}, в ней будет измененное значение.


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

npm install --save radium

В файле, где стили:

```javascript
import Raduim from 'radium';
...
export default Radium(App);

```
- в экспорте мы оборачиваем app в radium, потому что radium - это higher order component


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

Чтобы использовать медмазапросы, кейфреймы надо экспортировать еще один компонент Radium. Иначе получим ошибку: ' To use plugins requiring `addCSS` (e.g. keyframes, media queries), please wrap your application in the StyleRoot component. Component name: `Object`.'

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

npm install --save styled-components

```javascript
import styled from 'styled-components';
```
```javascript
styled.div``
```
вызываем соответствуюий метод для каждого html-элемента. Внутри `` - строка-аргумент для метода (это js синтаксис)
Все такие методы возвращают реакт-компонент, поэтому, если запихивать его в переменную, ее нуно называть с большой буквы.


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

Styled Components создаста дополнительные классы для разных условий (разных значений props) и будет подствалять нужный класс.

### CSS Modules

## Questions

1.Что если у меня в App.js вызывается много одинаковых компонентов, их состояние храниться в массиве и мне надо изменить значение и перерендерить только один компонент? Как это правильно сделать?

Вроде как, если есть key и список однотипных элементов,то Реакт перерендерит только измененные компоненты, хотя в setState передается весь массив.


2.Как понять, что реакт перерендирит, а что нет? Например при использовании списков, и изменении одного пункта, как убедиться, что он перерендирит только измененные пункты списка?