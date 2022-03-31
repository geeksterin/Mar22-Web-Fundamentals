
**What are CSS Animations?**
1. An animation lets an element gradually change from one style to another.

2. To use CSS animation, one must first specify some keyframes for the animation.

3. Keyframes hold what styles the element will have at certain times.

*The @keyframes Rule*

1. When specify CSS styles inside the @keyframes rule, the animation will gradually change from the current style to the new style at certain times.

2. To get an animation to work, one must bind the animation to an element.

**Set How Many Times an Animation Should Run**

 The *animation-iteration-count* property specifies the number of times an animation should run.

*Run Animation in Reverse Direction or Alternate Cycles*

    The animation-direction property specifies whether an animation should be played forwards, backwards or in alternate cycles.

The *animation-direction* property can have the following values:

1. normal - The animation is played as normal (forwards). This is default
2. reverse - The animation is played in reverse direction (backwards)
3. alternate - The animation is played forwards first, then backwards
4. alternate-reverse - The animation is played backwards first, then forwards


**Shorthand notation**

---
    div {
        animation-name: example;
        animation-duration: 5s;
        animation-timing-function: linear;
        animation-delay: 2s;
        animation-iteration-count: infinite;
        animation-direction: alternate; 
    }
---
    div {
        animation: example 5s linear 2s     infinite alternate;
    }