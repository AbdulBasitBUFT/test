element
= '[' tag-name ',' attributes ',' element-list ']'
| '[' tag-name ',' attributes ']'
| '[' tag-name ',' element-list ']'
| '[' tag-name ']'
| string
;
tag-name
= string
;
attributes
= '{' attribute-list '}'
| '{' '}'
;
attribute-list
= attribute ',' attribute-list
| attribute
;
attribute
= attribute-name ':' attribute-value
;
attribute-name
= string
;
attribute-value
= string
| number
| 'true'
| 'false'
| 'null'
;
element-list
= element ',' element-list
| element
;
console.log("Mir Faisal");
