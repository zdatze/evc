asked_quenstions = new Array();

current_question = null;

not_asked_qeustions = [
	{question : "Bei einem Color Filter Array wird für jedes Pixel entweder der rote, grüne oder blaue Farbanteil gemessen.", correct: true},
	{question : "Die sphärische Aberration führt zu Farbverfälschungen im Bild.", correct:  false},
	{question : "Je größer die Brennweite, desto kleiner erscheinen Objekte im Bild", correct: false},
	{question : "Die Brennweite hat einen Einfluss auf den Tiefenschärfebereich", correct: true},
	{question : "256 ist eine mögliche radiometrische Auflösung eines digitalen Bildes", correct: true},
	{question : "Nach der Korrektur einer geometrischen Linsenverzerrung erscheinen gerade Kanten im Bild ebenfalls gerade", correct: true},
	{question : "Die plenoptische Funktion hat mehrere Ausgabeparameter, aber nur einen Eingabeparameter", correct:  false},
	{question : "Farbe wird bei der plenoptischen Funktion nicht berücksichtigt.", correct: true},
	{question : "Weiter entfernte Objekte erscheinen größer auf der Projektion", correct:  false},
	{question : "Das Loch (die Blende) sollte für eine optimale Abbildung so klein wie möglich gewählt werden", correct: false},
	{question : "Eine zu große Blende führt zu einem unscharfen Bild", correct: true},
	{question : "Die proizierten Bilder sind schwarz-weiß, die Farbinformation geht verloren.", correct:  false},
	{question : "verschiedene Lichtspektren koennen den gleichen Fabreindruck erzeugen", correct: true},
	{question : "HSV schwarz ist wenn S=0", correct:  false},
	{question : "RGB kann alle menschlich wahrnehmbaren Farben darstellen", correct: true},
	{question : "Die Netzhaut des Auges enthält Stäbchen für das Schwarz/Weiß-Sehen und 3 Zapfenarten für das Farbsehen", correct: true},
	{question : "Rot-grün-blinde Personen sehen nur die Farben Rot und Grün", correct:  false},
	{question : "Licht mit höherer Frequenz hat eine kleinere Wellenlänge", correct: true},
	{question : "Die Purpurlinie des CIE Chromaticitydiagramms enthält spektralreine Farben", correct:  false},
	{question : "Drucker verwenden das YMCK Farbmodell", correct: true},
	{question : "Licht mit niedrigerer Frequenz hat eine kleinere Wellenlänge.", correct:  false},
	{question : "Beim CMYK-Farbmodell steht K für „Key“ und entspricht der Farbe schwarz.", correct: true},
	{question : "Das RGB Farbmodell basiert auf den Prinzip der subtraktiven Farbmischung", correct:  false},
	{question : "Das RGB_Farbmodell kommt z.B. bei Monitoren zum Einsatz und weist jeder Farbe eine Koordinate zu, wobei [0, 0, 0] schwarz entspricht.", correct: true},
	{question : "Das CIE 1931 XYZ Farbmodell umfasst auch jene Farben, die der Mensch nicht sehen kann.", correct:  false},
	{question : "Die Farbmodelle HSV und HLS sind intuitivere Modelle, bei denen sich eine Farbkoordinate prinzipiell aus Werten für den Farbton, die Sättigung und Helligkeit zusammensetzt.", correct: true},
	{question : "Der Raum der darstellbaren Farben eines Gerätes heißt Gamut.", correct: true},
	{question : "MPEG benoetigt mehr Rechenzeit zum Codieren als zum Decodieren", correct: true},
	{question : "Jpegs Speicherplatz ist abhängig vom Bildinhalt", correct: true},
	{question : "Verktorgrafiken zoomen verlustlos", correct: true},
	{question : "Lauflängenkodierung halbiert den Speicherbedarf maximal", correct:  false},
	{question : "Bei der Lauflängenkodierung eines Bildes kann es auch zu einer Vergrößerung des benötigten Speicherplatzes kommen.", correct: true},
	{question : "JPEG kombiniert verlustbehaftete und verlustfreie Kompressionsmethoden.", correct: true},
	{question : "Bei der JPEG Komprimierung werden niedrige Bildfrequenzen stärker komprimiert als hohe Bildfrequenzen.", correct:  false},
	{question : "Bei einer B-Rep wird nur die Oberfläche der Objekte beschrieben", correct: true},
	{question : "CSG-Objekte werden durch die Operatoren Vereinigung, Durchschnitt und Mengendifferenz beschrieben", correct: true},
	{question : "Der einzige Weg um CSG Objekte zu zeichnen ist sie in BRep Objekte umzurechnen", correct:  false},
	{question : "Ein Szenengraph ist eine genormte Datenstruktur zum Austausch geometrischer Daten", correct:  false},
	{question : "Die Genauigkeit der Objektdarstellung in Quad- und Octrees ist generell abhängig von der Baumtiefe.", correct: true},
	{question : "Octrees erlauben ein schnelles Durchsuchen bestimmter räumlicher Positionen eines Objektes.", correct: true},
	{question : "Durch die hierarchische Objektdarstellung von Octrees lassen sich einzelne Teile im Octree sehr einfach transformieren.", correct:  false},
	{question : "In einem Octree hat jeder Knoten mindestens acht Subknoten", correct:  false},
	{question : "Da bei CSG alle Primitive konsistent sind (keine Löcher aufweisen) und die Operatoren aus konsistenten Teilen nur konsistent Objekte erzeugen, sind bei CSG alle Objekte immer konsistent.", correct: true},
	{question : "CSG Objekte erlauben eine exakte Repräsentation von Objektoberflächen, haben jedoch einen höheren Speicherbedarf.", correct:  false},
	{question : "CSG Objekte stellen einen hierarchischen Aufbau eines Objektes durch Verknüpfung einfacher geometrischer Formen dar.", correct: true},
	{question : "Die Matrix-Schreibweise hat den Vorteil, dass durch Kombination von Grundmatrizen komplexe Transformationen mit nur einer Matrix dargestellt werden können.", correct: true},
	{question : "Für einen homogenen 2D Punkt (x,y,h) berechnet sich die tatsächliche x-Koordinate x‘ durch x‘=h/x", correct:  false},
	{question : "Polygon Meshes können als Ganzes transformiert werden, indem man jeden Punkt (Bildpunkt, 3D-Punkt) mit einer Matrix transformiert.", correct: true},
	{question : "Mittels 3x3 Matrizen lassen sich alle geometrischen Transformationene von 3D Objekten darstellen.", correct:  false},
	{question : "T(x,y,z) = T(x,y,z)^-1", correct:  false},
	{question : "S(4,4,4) * S(5,5,5) = S(20,20,20)", correct: true},
	{question : "S(x,y,z)^-1 = S(1/x,1/y,1/z)", correct: true},
	{question : "Die Viewport Transformation wandelt Kamerakoordinaten in Pixelkoordinaten um.", correct: true},
	{question : "Bei der perspektivischen Projektion bleiben die Tiefenwerte von Punkten erhalten.", correct:  false},
	{question : "Bei der perspektivischen Projektion bleibt die relative Ordnung der Tiefenwerte von Punkten erhalten.", correct: true},
	{question : "Pixel mit dem gleichen Grauwert können nach einer Histogrammqualisierung unterschiedliche Grauwerte aufweisen.", correct:  false},
	{question : "Der Wert eines Histogramm-Bins kann die Anzahl der Pixel des Bildes übersteigen.", correct:  false},
	{question : "Die Bildinvertierung kann mit einer einzigen Faltung des Bildes mit einem geeigneten Filter bewerkstelligt werden.", correct:  false},
	{question : "Die Schwellwertoperation kann mit einer einzigen Faltung des Bildes mit einem geeigneten Filter bewerkstelligt werden.", correct:  false},
	{question : "Der Median-Filter ist ein linearer Filter.", correct:  false},
	{question : "Ein zweidimensionaler Mittelwertfilter kann in zwei eindimensionale Filter geteilt werden, die nacheinander auf das Bild angewendet werden.", correct: true},
	{question : "Gradienten sind invariant zu Bildrotationen", correct: true},
	{question : "Bei Kantendetektoren, die auf der 1. Ableitung beruhen, werden Kanten durch Nulldurchgänge in der 1. Ableitung detektiert.", correct:  false},
	{question : "Bei der Fourier-Transformation werden tiefe Bildfrequenzen unterdrückt.", correct:  false},
	{question : "Mittels der Hough-Transformation können neben Linien auch andere geometrische Strukturen detektiert werden.", correct: true},
	{question : "Bei der Hough Transformation zur Liniendetektion besteht das Akkumulator Array (Hough Raum) aus einer Dimension.", correct:  false},
	{question : "Im Fourierspektrum liegen die hohen Frequenzen näher am Rand als die tiefen Frequenzen.", correct: true}
];