"# lecture-4" 
# Усул charAt()аломатро дар индекси муайяншуда дар сатр бармегардонад.

Мисол
![Alt-текст](Screenshot%202023-11-23%20015134.png/ "charAt")
# Усул At()аломатро дар индекси муайяншуда дар сатр бармегардонад. фаркшон инки минуса каьул мекунад,
Мисол
![Alt-текст](Screenshot%202023-11-23%20020445.png/ "At")

## Усули JavaScript concat() барои пайвастани ду ё зиёда сатр бидуни тағир додани сатри аслӣ ва баргардонидани сатри нав истифода мешавад.

### Синтаксис:

# str.concat(string2, string3, string4,......, stringN)
## Аргументҳо: Аргументҳои ин функсия сатрҳое мебошанд, ки бояд бо ҳам пайваст шаванд. Миқдори аргументҳои ин функсия ба шумораи сатрҳои бо ҳам пайвастшаванда баробар аст.

## Қимати бозгашт: Ин функсия сатри навро бармегардонад, ки маҷмӯи ҳамаи сатрҳои гуногуне мебошад, ки ба он ҳамчун аргумент интиқол дода шудаанд.
// JavaScript concat() method to 
// merge strings together 
# function func() { 

	// Original string 
	let str = 'Geeks'; 

	// Joining the strings together 
	let value = str.concat(' for', ' Geeks'); 
	console.log(value); 
} 

func();

# replace()Намунаҳои сатри JavaScript
## Фарз мекунем, ки шумо сатре доред, ки "ранг"-ро истифода мебарад, ки забони англисӣ аст ва мехоҳед "ранг"-ро ба "ранг", шакли англисии бритониёӣ иваз кунед. Дар ин ҷо як мисоли он аст, ки чӣ тавр шумо ин корро карда метавонед:

### {let originalString = "The color of the sky changes throughout the day.";

 ### let newString = originalString.replace("color", "colour");

### console.log(newString);} 

# Агар шумо хоҳед, ки ҳамаи мисолҳоро иваз кунед, шумо бояд ин replaceAll()усулро истифода баред.


## Усули JavaScript String split() барои тақсим кардани сатри додашуда ба массиви сатрҳо тавассути ҷудо кардани он ба зерсатрҳо бо истифода аз ҷудокунандаи муайяне, ки дар аргумент оварда шудааст, истифода мешавад.

Синтаксис: 

str.split(ҷудокунанда, маҳдуд)

ҷудокунанда: Он барои муайян кардани аломат ё ифодаи муқаррарӣ барои тақсим кардани сатр истифода мешавад. Агар ҷудокунанда номуайян бошад, он гоҳ тамоми сатр як унсури массиви ягона мегардад. Ҳамин чиз низ рӯй медиҳад, вақте ки ҷудокунанда дар сатр мавҷуд нест. Агар ҷудокунанда сатри холӣ бошад («»), пас ҳар як аломати сатр ҷудо карда мешавад.
маҳдудият: Маҳдудияти болоии шумораи тақсимҳоро, ки дар сатри додашуда пайдо мешаванд, муайян мекунад. Агар сатр пас аз расидан ба ҳадди маҳдуд боқӣ монад, он дар массив гузориш дода намешавад.
Қимати баргардонидан: Ин функсия массиви сатрҳоро бармегардонад, ки пас аз тақсим кардани сатри додашуда дар ҳар як нуқтае, ки ҷудокунанда пайдо мешавад, ташкил карда мешавад.

Дар зер намунаи усули String split() оварда шудааст. 

// JavaScript Program to illustrate split() function 

 # function func() {
	//Original string 
	let str = 'Geeks for Geeks'
	let array = str.split("for");
	console.log(array);
}
func();
# string.substring () функсияи дарунсохташуда дар JavaScript мебошад, ки барои баргардонидани қисми сатри додашуда аз шохиси оғоз то шохиси ниҳоӣ истифода мешавад. Индексгузорӣ аз сифр (0) оғоз меёбад. 

Синтаксис: 

# string.substring(Startindex, Endindex)

Параметрҳо: Дар ин ҷо Startindex ва Endindex қисми сатрро, ки ҳамчун зерсатр гирифта мешавад, тавсиф мекунанд. Дар ин ҷо Endindex ихтиёрӣ аст. 

Баргардонидани арзиши: Он сатри навро бармегардонад, ки қисми сатри додашуда аст. 

## <span style="color:Greenyellow">Math ceil()

Math.round()function returns the number rounded to the nearest integer.

## <span style="color:Greenyellow">Math floor()

Math.ceil() method rounds a decimal number up to the next largest integer and returns it.


## <span style="color:Greenyellow">Math max()

The max()method finds the maximum value among the specified values and returns it.

## <span style="color:Greenyellow">Math min()

The min()method finds the minimum value among the specified values and returns it.

## <span style="color:Greenyellow">Math pow()

The
method computes the square root of a specified number and returns it
method computes the power of a number by raising the second argument.


## <span style="color:Greenyellow">Math sqrt()


The sqrt () method computes the square root of a specified number and returns it

## <span style="color:Greenyellow">Math abs()

The abs()method finds the absolute value of the specified number (without any sign) and returns it.

## <span style="color:Greenyellow">Math min()

TheMath.random() function returns a floating-point, pseudo-random number between0(inclusive)
and1(exclusive).


## <span style="color:Greenyellow">isNAN()

The isNaN() function checks if a value isNaN (Not-a-Number)or not.