<?xml version="1.0" encoding="utf-8"?>
<!DOCTYPE TS>
<TS version="2.1" language="de" sourcelanguage="en">
  <context>
    <name>Assembly_CreateAssembly</name>
    <message>
      <location filename="../../../CommandCreateAssembly.py" line="48"/>
      <source>Create Assembly</source>
      <translation>Baugruppe erstellen</translation>
    </message>
    <message>
      <location filename="../../../CommandCreateAssembly.py" line="53"/>
      <source>Create an assembly object in the current document, or in the current active assembly (if any). Limit of one root assembly per file.</source>
      <translation>Erzeugt ein Baugruppen-Objekt im aktuellen Dokument oder in der aktuell aktiven Baugruppe (falls vorhanden). Das Limit ist eine Über-Baugruppe pro Datei.</translation>
    </message>
  </context>
  <context>
    <name>Assembly_CreateJointFixed</name>
    <message>
      <location filename="../../../CommandCreateJoint.py" line="76"/>
      <source>Create a Fixed Joint</source>
      <translation>Starre Verbindung erstellen</translation>
    </message>
    <message>
      <location filename="../../../CommandCreateJoint.py" line="83"/>
      <source>1 - If an assembly is active : Create a joint permanently locking two parts together, preventing any movement or rotation.</source>
      <translation>1 - Ist eine Baugruppe aktiv: Erstellt eine dauerhaft starre Verbindung zwischen zwei Bauteilen, welche jegliche Verschiebung oder Drehung verhindert.</translation>
    </message>
    <message>
      <location filename="../../../CommandCreateJoint.py" line="89"/>
      <source>2 - If a part is active : Position sub parts by matching selected coordinate systems. The second part selected will move.</source>
      <translation>2 - Ist ein Bauteil aktiv: Unterbauteile werden durch Angleichen der ausgewählten Koordinatensysteme zueinander ausgerichtet. Das als zweites ausgewählte Bauteil wird sich bewegen.</translation>
    </message>
  </context>
  <context>
    <name>Assembly_CreateJointRevolute</name>
    <message>
      <location filename="../../../CommandCreateJoint.py" line="111"/>
      <source>Create Revolute Joint</source>
      <translation>Drehverbindung erstellen</translation>
    </message>
    <message>
      <location filename="../../../CommandCreateJoint.py" line="118"/>
      <source>Create a Revolute Joint: Allows rotation around a single axis between selected parts.</source>
      <translation>Erzeuge eine Drehverbindung: Erlaubt die Drehung um eine Achse zwischen zwei ausgwählten Bauteilen.</translation>
    </message>
  </context>
  <context>
    <name>Assembly_CreateJointCylindrical</name>
    <message>
      <location filename="../../../CommandCreateJoint.py" line="139"/>
      <source>Create Cylindrical Joint</source>
      <translation>Zylindrische Verbindung erstellen</translation>
    </message>
    <message>
      <location filename="../../../CommandCreateJoint.py" line="146"/>
      <source>Create a Cylindrical Joint: Enables rotation along one axis while permitting movement along the same axis between assembled parts.</source>
      <translation>Erzeugt eine zylindrische Verbindung: Erlaubt die Drehung um eine Achse ohne lineare Bewegung entlang derselben Achse zwischen ausgewählen Bauteilen.</translation>
    </message>
  </context>
  <context>
    <name>Assembly_CreateJointSlider</name>
    <message>
      <location filename="../../../CommandCreateJoint.py" line="165"/>
      <source>Create Slider Joint</source>
      <translation>Gleitverbindung erstellen</translation>
    </message>
    <message>
      <location filename="../../../CommandCreateJoint.py" line="172"/>
      <source>Create a Slider Joint: Allows linear movement along a single axis but restricts rotation between selected parts.</source>
      <translation>Erzeugt eine Gleitverbindung: Erlaubt lineare Bewegungen entlang einer Achse und schränkt die Drehung zwischen den ausgewählen Bauteilen ein.</translation>
    </message>
  </context>
  <context>
    <name>Assembly_CreateJointBall</name>
    <message>
      <location filename="../../../CommandCreateJoint.py" line="191"/>
      <source>Create Ball Joint</source>
      <translation>Kugelverbindung erstellen</translation>
    </message>
    <message>
      <location filename="../../../CommandCreateJoint.py" line="198"/>
      <source>Create a Ball Joint: Connects parts at a point, allowing unrestricted movement as long as the connection points remain in contact.</source>
      <translation>Erzeugt eine Kugelverbindung: Verbindet Bauteile an einem Punkt und erlaubt uneingeschränkte Bewegung, solange die Punkte in Kontakt bleiben.</translation>
    </message>
  </context>
  <context>
    <name>Assembly_CreateJointDistance</name>
    <message>
      <location filename="../../../CommandCreateJoint.py" line="217"/>
      <source>Create Distance Joint</source>
      <translation>Parallelverbindung erstellen</translation>
    </message>
    <message>
      <location filename="../../../CommandCreateJoint.py" line="224"/>
      <source>Create a Distance Joint: Fix the distance between the selected objects.</source>
      <translation>Erzeuge eine Parallelverbindung: Fixiert die Entfernung zwischen den ausgewählten Objekten.</translation>
    </message>
    <message>
      <location filename="../../../CommandCreateJoint.py" line="230"/>
      <source>Create one of several different joints based on the selection.For example, a distance of 0 between a plane and a cylinder creates a tangent joint. A distance of 0 between planes will make them co-planar.</source>
      <translation>Einen von mehreren Verbindungen aus der Auswahl erstellen. Ein Abstand von 0 zwischen einer Ebene und einem Zylinder erstellt eine tangentiale Verbindung. Ein Abstand von 0 zwischen zwei Ebenen macht diese koplanar.</translation>
    </message>
  </context>
  <context>
    <name>Assembly_ToggleGrounded</name>
    <message>
      <location filename="../../../CommandCreateJoint.py" line="496"/>
      <source>Toggle grounded</source>
      <translation>Festsetzen umschalten</translation>
    </message>
    <message>
      <location filename="../../../CommandCreateJoint.py" line="503"/>
      <source>Grounding a part permanently locks its position in the assembly, preventing any movement or rotation. You need at least one grounded part before starting to assemble.</source>
      <translation>Das Festsetzen eines Bauteils fixiert seine Position in der Baugruppe und verhindert jegliches Verschieben oder Drehen. Es muss mindestens ein Bauteil in der Baugruppe festgesetzt werden, bevor weitere Bauteilverbindungen erstellt werden können.</translation>
    </message>
  </context>
  <context>
    <name>Assembly_ExportASMT</name>
    <message>
      <location filename="../../../CommandExportASMT.py" line="47"/>
      <source>Export ASMT File</source>
      <translation>ASMT-Datei exportieren</translation>
    </message>
    <message>
      <location filename="../../../CommandExportASMT.py" line="52"/>
      <source>Export currently active assembly as a ASMT file.</source>
      <translation>Exportiert die aktuell aktive Baugruppe als ASMT-Datei.</translation>
    </message>
  </context>
  <context>
    <name>Assembly_InsertLink</name>
    <message>
      <location filename="../../../CommandInsertLink.py" line="53"/>
      <source>Insert Component</source>
      <translation>Komponente einfügen</translation>
    </message>
    <message>
      <location filename="../../../CommandInsertLink.py" line="60"/>
      <source>Insert a component into the active assembly. This will create dynamic links to parts, bodies, primitives, and assemblies. To insert external components, make sure that the file is &lt;b&gt;open in the current session&lt;/b&gt;</source>
      <translation>Fügt eine Komponente in die aktuell aktive Baugruppe ein. Dies erstellt dynamische Verknüpfungen zu Bauteilen, Grundkörpern, Körpern und Baugruppen. Um externe Komponenten einzufügen, muss die Datei in der &lt;b&gt;aktuellen Sitzung geöffnet&lt;/b&gt; sein</translation>
    </message>
    <message>
      <location filename="../../../CommandInsertLink.py" line="62"/>
      <source>Insert by left clicking items in the list.</source>
      <translation>Einfügen durch Linksklick auf Elemente der Liste.</translation>
    </message>
    <message>
      <location filename="../../../CommandInsertLink.py" line="66"/>
      <source>Remove by right clicking items in the list.</source>
      <translation>Entfernen durch Rechtsklick auf Elemente der Liste.</translation>
    </message>
    <message>
      <location filename="../../../CommandInsertLink.py" line="71"/>
      <source>Press shift to add several instances of the component while clicking on the view.</source>
      <translation>Umschalttaste drücken, um durch Klicken in der Ansicht mehrere Verknüpfungen hinzuzufügen.</translation>
    </message>
  </context>
  <context>
    <name>Assembly_SolveAssembly</name>
    <message>
      <location filename="../../../CommandSolveAssembly.py" line="51"/>
      <source>Solve Assembly</source>
      <translation>Baugruppe lösen</translation>
    </message>
    <message>
      <location filename="../../../CommandSolveAssembly.py" line="58"/>
      <source>Solve the currently active assembly.</source>
      <translation>Löst die aktuell aktive Baugruppe (Neuberechnung).</translation>
    </message>
  </context>
  <context>
    <name>QObject</name>
    <message>
      <location filename="../../../InitGui.py" line="74"/>
      <source>Assembly</source>
      <translation>Baugruppe</translation>
    </message>
  </context>
  <context>
    <name>Workbench</name>
    <message>
      <location filename="../../../InitGui.py" line="108"/>
      <source>Assembly</source>
      <translation>Baugruppe</translation>
    </message>
    <message>
      <location filename="../../../InitGui.py" line="109"/>
      <source>Assembly Joints</source>
      <translation>Assembly-Verbindungen</translation>
    </message>
    <message>
      <location filename="../../../InitGui.py" line="112"/>
      <source>&amp;Assembly</source>
      <translation>&amp;Assembly</translation>
    </message>
  </context>
  <context>
    <name>Assembly</name>
    <message>
      <location filename="../../../JointObject.py" line="46"/>
      <source>Fixed</source>
      <translation>Starr</translation>
    </message>
    <message>
      <location filename="../../../JointObject.py" line="47"/>
      <source>Revolute</source>
      <translation>Drehverbindung</translation>
    </message>
    <message>
      <location filename="../../../JointObject.py" line="48"/>
      <source>Cylindrical</source>
      <translation>Zylindrische Verbindung</translation>
    </message>
    <message>
      <location filename="../../../JointObject.py" line="49"/>
      <source>Slider</source>
      <translation>Gleitverbindung</translation>
    </message>
    <message>
      <location filename="../../../JointObject.py" line="50"/>
      <source>Ball</source>
      <translation>Kugelverbindung</translation>
    </message>
    <message>
      <location filename="../../../JointObject.py" line="51"/>
      <location filename="../../../JointObject.py" line="1530"/>
      <source>Distance</source>
      <translation>Abstand</translation>
    </message>
    <message>
      <location filename="../../../JointObject.py" line="52"/>
      <source>Parallel</source>
      <translation>Parallel</translation>
    </message>
    <message>
      <location filename="../../../JointObject.py" line="53"/>
      <source>Perpendicular</source>
      <translation>Rechtwinklig</translation>
    </message>
    <message>
      <location filename="../../../JointObject.py" line="54"/>
      <location filename="../../../JointObject.py" line="1532"/>
      <source>Angle</source>
      <translation>Winkel</translation>
    </message>
    <message>
      <location filename="../../../JointObject.py" line="55"/>
      <source>RackPinion</source>
      <translation>Zahnstange-Ritzel</translation>
    </message>
    <message>
      <location filename="../../../JointObject.py" line="56"/>
      <source>Screw</source>
      <translation>Spindel</translation>
    </message>
    <message>
      <location filename="../../../JointObject.py" line="57"/>
      <source>Gears</source>
      <translation>Zahnräder</translation>
    </message>
    <message>
      <location filename="../../../JointObject.py" line="58"/>
      <source>Belt</source>
      <translation>Riemen</translation>
    </message>
    <message>
      <location filename="../../../JointObject.py" line="1365"/>
      <source>You need to select 2 elements from 2 separate parts.</source>
      <translation>Es müssen 2 Elemente von 2 separaten Bauteilen ausgewählt werden.</translation>
    </message>
    <message>
      <location filename="../../../JointObject.py" line="1534"/>
      <source>Radius 1</source>
      <translation type="unfinished">Radius 1</translation>
    </message>
    <message>
      <location filename="../../../JointObject.py" line="1536"/>
      <source>Pitch radius</source>
      <translation type="unfinished">Pitch radius</translation>
    </message>
    <message>
      <location filename="../../../Preferences.py" line="49"/>
      <source>Ask</source>
      <translation>Nachfragen</translation>
    </message>
    <message>
      <location filename="../../../Preferences.py" line="50"/>
      <source>Always</source>
      <translation>Immer</translation>
    </message>
    <message>
      <location filename="../../../Preferences.py" line="51"/>
      <source>Never</source>
      <translation>Nie</translation>
    </message>
    <message>
      <location filename="../../../CommandCreateBom.py" line="46"/>
      <source>Index (auto)</source>
      <translation type="unfinished">Index (auto)</translation>
    </message>
    <message>
      <location filename="../../../CommandCreateBom.py" line="47"/>
      <source>Name (auto)</source>
      <translation type="unfinished">Name (auto)</translation>
    </message>
    <message>
      <location filename="../../../CommandCreateBom.py" line="48"/>
      <source>Description</source>
      <translation>Beschreibung</translation>
    </message>
    <message>
      <location filename="../../../CommandCreateBom.py" line="49"/>
      <source>File Name (auto)</source>
      <translation type="unfinished">File Name (auto)</translation>
    </message>
    <message>
      <location filename="../../../CommandCreateBom.py" line="50"/>
      <source>Quantity (auto)</source>
      <translation type="unfinished">Quantity (auto)</translation>
    </message>
    <message>
      <location filename="../../../CommandCreateBom.py" line="197"/>
      <source>Default</source>
      <translation>Standard</translation>
    </message>
    <message>
      <location filename="../../../CommandCreateBom.py" line="293"/>
      <source>Duplicate Name</source>
      <translation>Dupliziere Name</translation>
    </message>
    <message>
      <location filename="../../../CommandCreateBom.py" line="294"/>
      <source>This name is already used. Please choose a different name.</source>
      <translation>Dieser Name wird bereits verwendet. Bitte wähle einen anderen Namen.</translation>
    </message>
    <message>
      <location filename="../../../CommandCreateBom.py" line="367"/>
      <source>Options:</source>
      <translation type="unfinished">Options:</translation>
    </message>
    <message>
      <location filename="../../../CommandCreateBom.py" line="374"/>
      <source>Sub-assemblies children : If checked, Sub assemblies children will be added to the bill of materials.</source>
      <translation type="unfinished">Sub-assemblies children : If checked, Sub assemblies children will be added to the bill of materials.</translation>
    </message>
    <message>
      <location filename="../../../CommandCreateBom.py" line="380"/>
      <source>Parts children : If checked, Parts children will be added to the bill of materials.</source>
      <translation type="unfinished">Parts children : If checked, Parts children will be added to the bill of materials.</translation>
    </message>
    <message>
      <location filename="../../../CommandCreateBom.py" line="386"/>
      <source>Only parts : If checked, only Part containers and sub-assemblies will be added to the bill of materials. Solids like PartDesign Bodies, fasteners or Part workbench primitives will be ignored.</source>
      <translation type="unfinished">Only parts : If checked, only Part containers and sub-assemblies will be added to the bill of materials. Solids like PartDesign Bodies, fasteners or Part workbench primitives will be ignored.</translation>
    </message>
    <message>
      <location filename="../../../CommandCreateBom.py" line="388"/>
      <source>Columns:</source>
      <translation>Spalten:</translation>
    </message>
    <message>
      <location filename="../../../CommandCreateBom.py" line="395"/>
      <source>Auto columns :  (Index, Quantity, Name...) are populated automatically. Any modification you make will be overridden. These columns cannot be renamed.</source>
      <translation type="unfinished">Auto columns :  (Index, Quantity, Name...) are populated automatically. Any modification you make will be overridden. These columns cannot be renamed.</translation>
    </message>
    <message>
      <location filename="../../../CommandCreateBom.py" line="401"/>
      <source>Custom columns : 'Description' and other custom columns you add by clicking on 'Add column' will not have their data overwritten. These columns can be renamed by double-clicking or pressing F2 (Renaming a column will currently lose its data).</source>
      <translation type="unfinished">Custom columns : 'Description' and other custom columns you add by clicking on 'Add column' will not have their data overwritten. These columns can be renamed by double-clicking or pressing F2 (Renaming a column will currently lose its data).</translation>
    </message>
    <message>
      <location filename="../../../CommandCreateBom.py" line="407"/>
      <source>Any column (custom or not) can be deleted by pressing Del.</source>
      <translation type="unfinished">Any column (custom or not) can be deleted by pressing Del.</translation>
    </message>
  </context>
  <context>
    <name>App::Property</name>
    <message>
      <location filename="../../../JointObject.py" line="192"/>
      <source>The type of the joint</source>
      <translation>Der Typ der Verbindung</translation>
    </message>
    <message>
      <location filename="../../../JointObject.py" line="213"/>
      <location filename="../../../JointObject.py" line="449"/>
      <source>The first object of the joint</source>
      <translation>Das erste Objekt der Verbindung</translation>
    </message>
    <message>
      <location filename="../../../JointObject.py" line="221"/>
      <source>The first part of the joint</source>
      <translation>Das erste Bauteil der Verbindung</translation>
    </message>
    <message>
      <location filename="../../../JointObject.py" line="232"/>
      <source>This is the local coordinate system within object1 that will be used for the joint.</source>
      <translation>Dies ist das lokale Koordinatensystem des ersten Objekts, welches für die Verbindung verwendet wird.</translation>
    </message>
    <message>
      <location filename="../../../JointObject.py" line="243"/>
      <source>This prevents Placement1 from recomputing, enabling custom positioning of the placement.</source>
      <translation>Dies verhindert die Neuberechnung der ersten Platzierung, wodurch eine benuzerdefinierte Platzierung ermöglicht wird.</translation>
    </message>
    <message>
      <location filename="../../../JointObject.py" line="252"/>
      <location filename="../../../JointObject.py" line="468"/>
      <source>The second object of the joint</source>
      <translation>Das zweite Objekt der Verbindung</translation>
    </message>
    <message>
      <location filename="../../../JointObject.py" line="260"/>
      <source>The second part of the joint</source>
      <translation>Das zweite Bauteil der Verbindung</translation>
    </message>
    <message>
      <location filename="../../../JointObject.py" line="271"/>
      <source>This is the local coordinate system within object2 that will be used for the joint.</source>
      <translation>Dies ist das lokale Koordinatensystem des zweiten Objekts, welches für die Verbindung verwendet wird.</translation>
    </message>
    <message>
      <location filename="../../../JointObject.py" line="282"/>
      <source>This prevents Placement2 from recomputing, enabling custom positioning of the placement.</source>
      <translation>Dies verhindert die Neuberechnung der zweiten Platzierung, wodurch eine benuzerdefinierte Platzierung ermöglicht wird.</translation>
    </message>
    <message>
      <location filename="../../../JointObject.py" line="294"/>
      <source>This is the distance of the joint. It is used only by the distance joint and by RackPinion (pitch radius), Screw and Gears and Belt(radius1)</source>
      <translation>Dies ist der Abstand der Verbindung. Dieser wird nur von der Parallelverbindung, Zahnstange-Ritzel-Verbindung (Steigungsradius), Schraubverbindung, Zahnrad- und Riemenverbindung (Radius 1) verwendet</translation>
    </message>
    <message>
      <location filename="../../../JointObject.py" line="305"/>
      <source>This is the second distance of the joint. It is used only by the gear joint to store the second radius.</source>
      <translation>Dies ist der zweite Abstand der Verbindung. Er wird nur von der Zahnrad- und Riemenverbindung für den zweiten Radius verwendert.</translation>
    </message>
    <message>
      <location filename="../../../JointObject.py" line="316"/>
      <source>This is the rotation of the joint.</source>
      <translation>Dies ist die Drehung der Verbindung.</translation>
    </message>
    <message>
      <location filename="../../../JointObject.py" line="327"/>
      <source>This is the offset vector of the joint.</source>
      <translation>Dies ist der Versatz-Vektor der Verbindung.</translation>
    </message>
    <message>
      <location filename="../../../JointObject.py" line="338"/>
      <source>This indicates if the joint is active.</source>
      <translation>Dies zeigt an, ob die Verbindung aktiv ist.</translation>
    </message>
    <message>
      <location filename="../../../JointObject.py" line="350"/>
      <source>Enable the minimum length limit of the joint.</source>
      <translation type="unfinished">Enable the minimum length limit of the joint.</translation>
    </message>
    <message>
      <location filename="../../../JointObject.py" line="362"/>
      <source>Enable the maximum length limit of the joint.</source>
      <translation type="unfinished">Enable the maximum length limit of the joint.</translation>
    </message>
    <message>
      <location filename="../../../JointObject.py" line="374"/>
      <source>Enable the minimum angle limit of the joint.</source>
      <translation type="unfinished">Enable the minimum angle limit of the joint.</translation>
    </message>
    <message>
      <location filename="../../../JointObject.py" line="386"/>
      <source>Enable the minimum length of the joint.</source>
      <translation type="unfinished">Enable the minimum length of the joint.</translation>
    </message>
    <message>
      <location filename="../../../JointObject.py" line="398"/>
      <source>This is the minimum limit for the length between both coordinate systems (along their Z axis).</source>
      <translation>Dies ist der minimale Grenzwert für den Abstand zwischen beiden Koordinatensystemen (entlang ihrer Z-Achse).</translation>
    </message>
    <message>
      <location filename="../../../JointObject.py" line="409"/>
      <source>This is the maximum limit for the length between both coordinate systems (along their Z axis).</source>
      <translation>Dies ist der maximale Grenzwert für den Abstand zwischen beiden Koordinatensystemen (entlang ihrer Z-Achse).</translation>
    </message>
    <message>
      <location filename="../../../JointObject.py" line="420"/>
      <source>This is the minimum limit for the angle between both coordinate systems (between their X axis).</source>
      <translation>Dies ist der minimale Grenzwert für den Winkel zwischen beiden Koordinatensystemen (zwischen ihrer X-Achse).</translation>
    </message>
    <message>
      <location filename="../../../JointObject.py" line="431"/>
      <source>This is the maximum limit for the angle between both coordinate systems (between their X axis).</source>
      <translation>Dies ist der maximale Grenzwert für den Winkel zwischen beiden Koordinatensystemen (zwischen ihrer X-Achse).</translation>
    </message>
    <message>
      <location filename="../../../JointObject.py" line="1021"/>
      <source>The object to ground</source>
      <translation>Das festzusetzende Objekt</translation>
    </message>
    <message>
      <location filename="../../../JointObject.py" line="1033"/>
      <source>This is where the part is grounded.</source>
      <translation>Dies ist die Position, an der das Objekt festgesetzt wird.</translation>
    </message>
    <message>
      <location filename="../../../CommandCreateView.py" line="235"/>
      <source>The object moved by the move</source>
      <translation>Das Objekt wurde durch die Verschiebung bewegt</translation>
    </message>
    <message>
      <location filename="../../../CommandCreateView.py" line="242"/>
      <source>The containing parts of objects moved by the move</source>
      <translation>Die enthaltenen Bauteile von Objekten wurden durch die Verschiebung bewegt</translation>
    </message>
    <message>
      <location filename="../../../CommandCreateView.py" line="252"/>
      <source>This is the movement of the move. The end placement is the result of the start placement * this placement.</source>
      <translation>Dies ist die Verschiebung der Bewegung. Die Endplatzierung ist das Ergebnis aus der Startplatzierung * dieser Platzierung.</translation>
    </message>
    <message>
      <location filename="../../../CommandCreateView.py" line="259"/>
      <source>The type of the move</source>
      <translation>Die Art der Bewegung</translation>
    </message>
  </context>
  <context>
    <name>TaskAssemblyCreateJoint</name>
    <message>
      <location filename="../panels/TaskAssemblyCreateJoint.ui" line="14"/>
      <source>Create Joint</source>
      <translation>Verbindung erstellen</translation>
    </message>
    <message>
      <location filename="../panels/TaskAssemblyCreateJoint.ui" line="41"/>
      <source>Distance</source>
      <translation>Parallelverbindung</translation>
    </message>
    <message>
      <location filename="../panels/TaskAssemblyCreateJoint.ui" line="65"/>
      <source>Radius 2</source>
      <translation>Radius 2</translation>
    </message>
    <message>
      <location filename="../panels/TaskAssemblyCreateJoint.ui" line="89"/>
      <source>Offset</source>
      <translation>Versetzen</translation>
    </message>
    <message>
      <location filename="../panels/TaskAssemblyCreateJoint.ui" line="113"/>
      <source>Rotation</source>
      <translation>Drehverbindung</translation>
    </message>
    <message>
      <location filename="../panels/TaskAssemblyCreateJoint.ui" line="141"/>
      <source>Reverse the direction of the joint.</source>
      <translation>Die Richtung der Verbindung umkehren.</translation>
    </message>
    <message>
      <location filename="../panels/TaskAssemblyCreateJoint.ui" line="144"/>
      <source>Reverse</source>
      <translation>Umkehren</translation>
    </message>
    <message>
      <location filename="../panels/TaskAssemblyCreateJoint.ui" line="155"/>
      <source>Limits</source>
      <translation>Grenzwerte</translation>
    </message>
    <message>
      <location filename="../panels/TaskAssemblyCreateJoint.ui" line="161"/>
      <source>Min length</source>
      <translation type="unfinished">Min length</translation>
    </message>
    <message>
      <location filename="../panels/TaskAssemblyCreateJoint.ui" line="184"/>
      <source>Max length</source>
      <translation type="unfinished">Max length</translation>
    </message>
    <message>
      <location filename="../panels/TaskAssemblyCreateJoint.ui" line="207"/>
      <source>Min angle</source>
      <translation type="unfinished">Min angle</translation>
    </message>
    <message>
      <location filename="../panels/TaskAssemblyCreateJoint.ui" line="236"/>
      <source>Max angle</source>
      <translation type="unfinished">Max angle</translation>
    </message>
    <message>
      <location filename="../panels/TaskAssemblyCreateJoint.ui" line="268"/>
      <source>Reverse rotation</source>
      <translation>Drehrichtung umkehren</translation>
    </message>
  </context>
  <context>
    <name>TaskAssemblyInsertLink</name>
    <message>
      <location filename="../panels/TaskAssemblyInsertLink.ui" line="14"/>
      <source>Insert Component</source>
      <translation>Komponente einfügen</translation>
    </message>
    <message>
      <location filename="../panels/TaskAssemblyInsertLink.ui" line="20"/>
      <source>Search parts...</source>
      <translation>Bauteile durchsuchen...</translation>
    </message>
    <message>
      <location filename="../panels/TaskAssemblyInsertLink.ui" line="32"/>
      <source>Don't find your part? </source>
      <translation>Bauteil nicht gefunden? </translation>
    </message>
    <message>
      <location filename="../panels/TaskAssemblyInsertLink.ui" line="39"/>
      <source>Open file</source>
      <translation>Datei öffnen</translation>
    </message>
    <message>
      <location filename="../panels/TaskAssemblyInsertLink.ui" line="48"/>
      <source>If checked, the list will show only Parts.</source>
      <translation>Wenn aktiviert, wird die Liste nur Bauteile anzeigen.</translation>
    </message>
    <message>
      <location filename="../panels/TaskAssemblyInsertLink.ui" line="51"/>
      <source>Show only parts</source>
      <translation>Zeige nur Bauteile</translation>
    </message>
  </context>
  <context>
    <name>AssemblyGui::DlgSettingsAssembly</name>
    <message>
      <location filename="../preferences/Assembly.ui" line="14"/>
      <source>General</source>
      <translation>Allgemein</translation>
    </message>
    <message>
      <location filename="../preferences/Assembly.ui" line="20"/>
      <source>Allow to leave edit mode when pressing Esc button</source>
      <translation>Ermöglicht den Bearbeitungsmodus durch Drücken der Esc-Taste zu verlassen</translation>
    </message>
    <message>
      <location filename="../preferences/Assembly.ui" line="23"/>
      <source>Esc leave edit mode</source>
      <translation>Mit Esc den Bearbeitungsmodus verlassen</translation>
    </message>
    <message>
      <location filename="../preferences/Assembly.ui" line="39"/>
      <source>Log the dragging steps of the solver. Useful if you want to report a bug.
The files are named "runPreDrag.asmt" and "dragging.log" and are located in the default directory of std::ofstream (on Windows it's the desktop)</source>
      <translation type="unfinished">Log the dragging steps of the solver. Useful if you want to report a bug.
The files are named "runPreDrag.asmt" and "dragging.log" and are located in the default directory of std::ofstream (on Windows it's the desktop)</translation>
    </message>
    <message>
      <location filename="../preferences/Assembly.ui" line="43"/>
      <source>Log dragging steps</source>
      <translation>Protokolliere Ziehschritte</translation>
    </message>
    <message>
      <location filename="../preferences/Assembly.ui" line="59"/>
      <source>Ground first part:</source>
      <translation>Erstes Bauteil festsetzen:</translation>
    </message>
    <message>
      <location filename="../preferences/Assembly.ui" line="66"/>
      <source>When you insert the first part in the assembly, you can choose to ground the part automatically.</source>
      <translation>Wenn das erste Bauteil in die Baugruppe eingefügt wird, kann es automatisch festgesetzt werden.</translation>
    </message>
  </context>
  <context>
    <name>AssemblyGui::ViewProviderAssembly</name>
    <message>
      <location filename="../../ViewProviderAssembly.cpp" line="150"/>
      <source>Delete associated joints</source>
      <translation>Zugehörige Verbindungen löschen</translation>
    </message>
    <message>
      <location filename="../../ViewProviderAssembly.cpp" line="162"/>
      <source>The object is associated to one or more joints.</source>
      <translation>Das Objekt gehört zu einer oder mehreren Verbindungen.</translation>
    </message>
    <message>
      <location filename="../../ViewProviderAssembly.cpp" line="164"/>
      <source>Do you want to move the object and delete associated joints?</source>
      <translation>Soll das Objekt bewegt und zugehörige Verbindungen gelöscht werden?</translation>
    </message>
    <message>
      <location filename="../../ViewProviderAssembly.cpp" line="780"/>
      <source>Move part</source>
      <translation>Bauteil verschieben</translation>
    </message>
  </context>
  <context>
    <name>Assembly_CreateJointRackPinion</name>
    <message>
      <location filename="../../../CommandCreateJoint.py" line="331"/>
      <source>Create Rack and Pinion Joint</source>
      <translation>Zahnstange-Ritzel-Verbindung erstellen</translation>
    </message>
    <message>
      <location filename="../../../CommandCreateJoint.py" line="338"/>
      <source>Create a Rack and Pinion Joint: Links a part with a sliding joint with a part with a revolute joint.</source>
      <translation>Erstellt eine Zahnstange-Ritzel-Verbindung: Koppelt ein Bauteil mit Gleitverbindung mit einem Bauteil mit Drehverbindung.</translation>
    </message>
    <message>
      <location filename="../../../CommandCreateJoint.py" line="343"/>
      <source>Select the same coordinate systems as the revolute and sliding joints. The pitch radius defines the movement ratio between the rack and the pinion.</source>
      <translation>Dieselben Koordinatensysteme auswählen wie für die Dreh- und Gleitverbindung. Der Teilkreisradius (pitch radius) definiert das Bewegungsverhältnis zwischen Zahnstange und Ritzel.</translation>
    </message>
  </context>
  <context>
    <name>Assembly_CreateJointScrew</name>
    <message>
      <location filename="../../../CommandCreateJoint.py" line="362"/>
      <source>Create Screw Joint</source>
      <translation>Spindelverbindung erstellen</translation>
    </message>
    <message>
      <location filename="../../../CommandCreateJoint.py" line="369"/>
      <source>Create a Screw Joint: Links a part with a sliding joint with a part with a revolute joint.</source>
      <translation>Erstellt eine Spindelverbindung: Koppelt ein Bauteil mit Gleitverbindung mit einem Bauteil mit Drehverbindung.</translation>
    </message>
    <message>
      <location filename="../../../CommandCreateJoint.py" line="374"/>
      <source>Select the same coordinate systems as the revolute and sliding joints. The pitch radius defines the movement ratio between the rotating screw and the sliding part.</source>
      <translation>Dieselben Koordinatensysteme wie die Dreh- ud Gleitverbindung auswählen. Der Steigungsradius definiert das Bewegungsverhältnis zwischen rotierender Schraube und dem gleitenden Bauteil.</translation>
    </message>
    <message>
      <location filename="../../../CommandCreateJoint.py" line="405"/>
      <location filename="../../../CommandCreateJoint.py" line="436"/>
      <source>Select the same coordinate systems as the revolute joints.</source>
      <translation>Dieselben Koordinatensysteme wie für die Drehverbindungen auswählen.</translation>
    </message>
  </context>
  <context>
    <name>Assembly_CreateJointGears</name>
    <message>
      <location filename="../../../CommandCreateJoint.py" line="393"/>
      <source>Create Gears Joint</source>
      <translation>Zahnradverbindung erstellen</translation>
    </message>
    <message>
      <location filename="../../../CommandCreateJoint.py" line="400"/>
      <source>Create a Gears Joint: Links two rotating gears together. They will have inverse rotation direction.</source>
      <translation>Erstellt eine Zahnradverbindung: Koppelt die Drehungen zweier Zahnräder, d.h. die Drehrichtungen sind entgegengesetzt.</translation>
    </message>
  </context>
  <context>
    <name>Assembly_CreateJointBelt</name>
    <message>
      <location filename="../../../CommandCreateJoint.py" line="424"/>
      <source>Create Belt Joint</source>
      <translation>Riemenverbindung erstellen</translation>
    </message>
    <message>
      <location filename="../../../CommandCreateJoint.py" line="431"/>
      <source>Create a Belt Joint: Links two rotating objects together. They will have the same rotation direction.</source>
      <translation>Erstellt eine Riemenverbindung: Koppelt die Drehungen zweier (Riemen-)Scheiben, d.h. die Drehrichtungen sind gleich.</translation>
    </message>
  </context>
  <context>
    <name>Assembly_CreateJointGearBelt</name>
    <message>
      <location filename="../../../CommandCreateJoint.py" line="456"/>
      <source>Create Gear/Belt Joint</source>
      <translation>Zahnrad-/Riemenverbindung erstellen</translation>
    </message>
    <message>
      <location filename="../../../CommandCreateJoint.py" line="462"/>
      <source>Create a Gears/Belt Joint: Links two rotating gears together.</source>
      <translation>Eine Zahnrad/Riemen Verbindung erstellen: Verknüpft zwei rotierende Objekte mittels Übersetzung.</translation>
    </message>
    <message>
      <location filename="../../../CommandCreateJoint.py" line="467"/>
      <source>Select the same coordinate systems as the revolute joints.</source>
      <translation>Dieselben Koordinatensysteme der Drehverbindungen auswählen.</translation>
    </message>
  </context>
  <context>
    <name>Assembly_CreateView</name>
    <message>
      <location filename="../../../CommandCreateView.py" line="55"/>
      <source>Create Exploded View</source>
      <translation>Explosionsansicht erstellen</translation>
    </message>
    <message>
      <location filename="../../../CommandCreateView.py" line="62"/>
      <source>Create an exploded view of the current assembly.</source>
      <translation>Erstellt eine Explosionsansicht der aktuellen Baugruppe.</translation>
    </message>
  </context>
  <context>
    <name>TaskAssemblyCreateView</name>
    <message>
      <location filename="../panels/TaskAssemblyCreateView.ui" line="14"/>
      <source>Create Exploded View</source>
      <translation>Explosionsansicht erstellen</translation>
    </message>
    <message>
      <location filename="../panels/TaskAssemblyCreateView.ui" line="20"/>
      <source>If checked, Parts will be selected as a single solid.</source>
      <translation>Wenn aktiviert, werden Bauteile als einzelner Festkörper ausgewählt.</translation>
    </message>
    <message>
      <location filename="../panels/TaskAssemblyCreateView.ui" line="23"/>
      <source>Parts as single solid</source>
      <translation>Bauteile als einzelne Festkörper</translation>
    </message>
    <message>
      <location filename="../panels/TaskAssemblyCreateView.ui" line="42"/>
      <source>Align dragger</source>
      <translation>Bewegungskreuz ausrichten</translation>
    </message>
    <message>
      <location filename="../panels/TaskAssemblyCreateView.ui" line="49"/>
      <source>Aligning dragger:
Select a feature.
Press ESC to cancel.</source>
      <translation>Bewegungskreuz ausrichten:
Ein Merkmal auswählen.
ESC zum abbrechen.</translation>
    </message>
    <message>
      <location filename="../panels/TaskAssemblyCreateView.ui" line="58"/>
      <source>Explode radially</source>
      <translation>Radial explodieren</translation>
    </message>
    <message>
      <location filename="../panels/TaskAssemblyCreateBom.ui" line="14"/>
      <source>Create Bill Of Materials</source>
      <translation>Stückliste erstellen</translation>
    </message>
    <message>
      <location filename="../panels/TaskAssemblyCreateBom.ui" line="20"/>
      <source>If checked, Sub assemblies children will be added to the bill of materials.</source>
      <translation type="unfinished">If checked, Sub assemblies children will be added to the bill of materials.</translation>
    </message>
    <message>
      <location filename="../panels/TaskAssemblyCreateBom.ui" line="23"/>
      <source>Sub-assemblies children</source>
      <translation type="unfinished">Sub-assemblies children</translation>
    </message>
    <message>
      <location filename="../panels/TaskAssemblyCreateBom.ui" line="39"/>
      <source>If checked, Parts children will be added to the bill of materials.</source>
      <translation type="unfinished">If checked, Parts children will be added to the bill of materials.</translation>
    </message>
    <message>
      <location filename="../panels/TaskAssemblyCreateBom.ui" line="42"/>
      <source>Parts children</source>
      <translation type="unfinished">Parts children</translation>
    </message>
    <message>
      <location filename="../panels/TaskAssemblyCreateBom.ui" line="58"/>
      <source>If checked, only Part containers and sub-assemblies will be added to the bill of materials. Solids like PartDesign Bodies, fasteners or Part workbench primitives will be ignored.</source>
      <translation type="unfinished">If checked, only Part containers and sub-assemblies will be added to the bill of materials. Solids like PartDesign Bodies, fasteners or Part workbench primitives will be ignored.</translation>
    </message>
    <message>
      <location filename="../panels/TaskAssemblyCreateBom.ui" line="61"/>
      <source>Only parts</source>
      <translation>Nur Parts</translation>
    </message>
    <message>
      <location filename="../panels/TaskAssemblyCreateBom.ui" line="77"/>
      <source>Columns</source>
      <translation>Spalten</translation>
    </message>
    <message>
      <location filename="../panels/TaskAssemblyCreateBom.ui" line="86"/>
      <source>Add column</source>
      <translation>Spalte hinzufügen</translation>
    </message>
    <message>
      <location filename="../panels/TaskAssemblyCreateBom.ui" line="96"/>
      <source>Export</source>
      <translation>Exportieren</translation>
    </message>
    <message>
      <location filename="../panels/TaskAssemblyCreateBom.ui" line="109"/>
      <source>Help</source>
      <translation>Hilfe</translation>
    </message>
  </context>
  <context>
    <name>Assembly_CreateJointParallel</name>
    <message>
      <location filename="../../../CommandCreateJoint.py" line="249"/>
      <source>Create Parallel Joint</source>
      <translation>Parallele Verbindung erstellen</translation>
    </message>
    <message>
      <location filename="../../../CommandCreateJoint.py" line="256"/>
      <source>Create an Parallel Joint: Make the Z axis of selected coordinate systems parallel.</source>
      <translation>Erstellt eine parallele Verbindung: Die Z-Achsen der ausgewählten Koordinatensysteme werden parallel ausgerichtet.</translation>
    </message>
  </context>
  <context>
    <name>Assembly_CreateJointPerpendicular</name>
    <message>
      <location filename="../../../CommandCreateJoint.py" line="277"/>
      <source>Create Perpendicular Joint</source>
      <translation>Rechtwinklige Verbindung erstellen</translation>
    </message>
    <message>
      <location filename="../../../CommandCreateJoint.py" line="284"/>
      <source>Create an Perpendicular Joint: Make the Z axis of selected coordinate systems perpendicular.</source>
      <translation>Erstellt eine rechtwinklige Verbindung: Die Z-Achsen der ausgewählten Koordinatensysteme werden rechtwinklig ausgerichtet.</translation>
    </message>
  </context>
  <context>
    <name>Assembly_CreateJointAngle</name>
    <message>
      <location filename="../../../CommandCreateJoint.py" line="303"/>
      <source>Create Angle Joint</source>
      <translation>Winkelverbindung erstellen</translation>
    </message>
    <message>
      <location filename="../../../CommandCreateJoint.py" line="310"/>
      <source>Create an Angle Joint: Fix the angle between the Z axis of selected coordinate systems.</source>
      <translation>Erstellt eine Winkelverbindung: Der Winkel zwischen den Z-Achsen der ausgewählten Koordinatensysteme wird festgelegt.</translation>
    </message>
  </context>
  <context>
    <name>Assembly_CreateBom</name>
    <message>
      <location filename="../../../CommandCreateBom.py" line="69"/>
      <source>Create Bill of Materials</source>
      <translation>Stückliste erstellen</translation>
    </message>
    <message>
      <location filename="../../../CommandCreateBom.py" line="76"/>
      <source>Create a bill of materials of the current assembly. If an assembly is active, it will be a BOM of this assembly. Else it will be a BOM of the whole document.</source>
      <translation type="unfinished">Create a bill of materials of the current assembly. If an assembly is active, it will be a BOM of this assembly. Else it will be a BOM of the whole document.</translation>
    </message>
    <message>
      <location filename="../../../CommandCreateBom.py" line="81"/>
      <source>The BOM object is a document object that stores the settings of your BOM. It is also a spreadsheet object so you can easily visualize the bom. If you don't need the BOM object to be saved as a document object, you can simply export and cancel the task.</source>
      <translation type="unfinished">The BOM object is a document object that stores the settings of your BOM. It is also a spreadsheet object so you can easily visualize the bom. If you don't need the BOM object to be saved as a document object, you can simply export and cancel the task.</translation>
    </message>
    <message>
      <location filename="../../../CommandCreateBom.py" line="86"/>
      <source>The columns 'Index', 'Name', 'File Name' and 'Quantity' are automatically generated on recompute. The 'Description' and custom columns are not overwritten.</source>
      <translation type="unfinished">The columns 'Index', 'Name', 'File Name' and 'Quantity' are automatically generated on recompute. The 'Description' and custom columns are not overwritten.</translation>
    </message>
  </context>
</TS>
