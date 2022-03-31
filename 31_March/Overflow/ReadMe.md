The overflow property specifies whether to clip the content or to add scrollbars when the content of an element is too big to fit in the specified area.

The overflow property has the following values:

1. visible - Default. The overflow is not clipped. The content renders outside the element's box
   2. hidden - The overflow is clipped, and the rest of the content will be invisible
 3. scroll - The overflow is clipped, and a scrollbar is added to see the rest of the content
4. auto - Similar to scroll, but it adds scrollbars only when necessary.

**overflow-x and overflow-y**
The overflow-x and overflow-y properties specifies whether to change the overflow of content just horizontally or vertically (or both):

overflow-x specifies what to do with the left/right edges of the content.
overflow-y specifies what to do with the top/bottom edges of the content.