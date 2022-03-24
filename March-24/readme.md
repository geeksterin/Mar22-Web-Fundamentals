- descendant selector( " " )

The descendant selector matches all elements that are descendants of a specified element.

The following example selects all <p> elements inside <div> elements:

```
div p{
    style...
}
```

D.R.Y - dont repeat yourself

- child selector ( > )

The child selector selects all elements that are the DIRECT children of a specified element.

The following example selects all <p> elements that are children of a <div> element:

```
div > p {
  background-color: yellow;
}
```

- Adjacent Sibling Selector (+) :
  The adjacent sibling selector is used to select an element that is "directly" after another specific element.

Sibling elements must have the same parent element, and "adjacent" means "immediately following".

The following example selects the first <p> element that are placed immediately after <div> elements:

```
div + p {
  background-color: yellow;
}
```

- General Sibling Selector (~) : - tilda key (above tab key)
  The general sibling selector selects all elements that are next siblings of a specified element.

The following example: selects all <p> elements that are next siblings of <div> elements:

```
div ~ p {
  background-color: yellow;
}
```

optional assignment - https://flukeout.github.io/

assignment - make webpage similar to the screenshot attached
make styles and form
