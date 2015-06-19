# custom.radiobox

This is a custom implementation of tradicional HTML radioboxes.
Its implementation includes data attributes manipulation and uses Bridger.JS with jQuery wrapper as DOM Manipulation Library wrapper.

## Install

You can install using Bower:

```javascript
bower install custom-radiobox
```

Or by using the distribution file at:  dist/custom.radiobox.js

## How it works?

A functional example can be found at examples folder. But consider the following HTML:

```html
<ul class="myradiobox" data-radiogroup="options">
  <li data-value="a">Option 1</li>
  <li data-value="b">Option 2</li>
  <li data-value="c">Option 3</li>
</ul>
```

The custom.radiobox Library is initialized at the end of page. But if you need a better control, you can re-initialize the library using:

```javascript
CustomRadiobox.init
```

## What happens when library initializes?

An initialized custom.radiobox generates the following HTML:

```html
<ul class="myradiobox" data-radiogroup="options">
  <li data-value="a">Option 1</li>
  <li data-value="b">Option 2</li>
  <li data-value="c">Option 3</li>
</ul>
<input type="radio" name="options" id="options_0" value="a" data-nexus="[myradiobox option]" style="display:none;" />
<input type="radio" name="options" id="options_1" value="b" data-nexus="[myradiobox option]" style="display:none;" />
<input type="radio" name="options" id="options_2" value="c" data-nexus="[myradiobox option]" style="display:none;" />
```

The radiobox inputs are shown hidden in the page, and the options in data-radiogroup and input radio options are synced, so every selection is reflected to its sibling brother.

## What happens when user clicks an option?

If user clicks the first option, the following happens to the HTML:

```html
<ul class="myradiobox" data-radiogroup="options" data-value="a">
  <li data-value="a" class="is-selected">Option 1</li>
  <li data-value="b">Option 2</li>
  <li data-value="c">Option 3</li>
</ul>
```

We dont fully appreciate the "selection" class management, but its the most widely compatible way we found to do this task.

## Which information is sended when user submit a form using data-radiogroup?

When a user send a form, the "data-radiogroup" name will be sent to browser containing the selected value.

Example:
```
options=a
```

## How to retrieve the selected value?

To retrieve, do the following: (using jQuery/Sizzle/Zepto sintax)

```javascript
$(".myradiobox").data('value')
```

## Running tests

The custom.radiobox is tested under Jasmine via Grunt (PhantomJS).

```
grunt jasmine
```

## How to contribute?

E-mail me at renatodex@gmail.com
Renato Alves (@renatodex)
