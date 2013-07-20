function runner()
{
	initializeVariables();
}

function initializeVariables()
{
	    var sbml = '<?xml version="1.0" encoding="UTF-8"?> <sbml xmlns="http://www.sbml.org/sbml/level3/version1/core" level="3" version="1"> <model metaid="_case00008" id="case00008" name="case00008" timeUnits="time"> <listOfUnitDefinitions> <unitDefinition id="volume"> <listOfUnits> <unit kind="litre" exponent="1" scale="0" multiplier="1"/> </listOfUnits> </unitDefinition> <unitDefinition id="substance"> <listOfUnits> <unit kind="mole" exponent="1" scale="0" multiplier="1"/> </listOfUnits> </unitDefinition> <unitDefinition id="time"> <listOfUnits> <unit kind="second" exponent="1" scale="0" multiplier="1"/> </listOfUnits> </unitDefinition> </listOfUnitDefinitions> <listOfCompartments> <compartment id="compartment" name="compartment" spatialDimensions="3" size="1" units="volume" constant="true"/> </listOfCompartments> <listOfSpecies> <species id="S1" name="S1" compartment="compartment" initialAmount="0.15" substanceUnits="substance" hasOnlySubstanceUnits="false" boundaryCondition="false" constant="false"/> <species id="S2" name="S2" compartment="compartment" initialAmount="0.15" substanceUnits="substance" hasOnlySubstanceUnits="false" boundaryCondition="true" constant="false"/> </listOfSpecies> <listOfParameters> <parameter id="k1" name="k1" value="0.5" constant="true"/> <parameter id="k2" name="k2" value="0.25" constant="true"/> </listOfParameters> <listOfReactions> <reaction id="reaction1" name="reaction1" reversible="false" fast="false"> <listOfReactants> <speciesReference species="S1" stoichiometry="1" constant="true"/> </listOfReactants> <listOfProducts> <speciesReference species="S2" stoichiometry="1" constant="true"/> </listOfProducts> <kineticLaw> <math xmlns="http://www.w3.org/1998/Math/MathML"> <apply> <times/> <ci> compartment </ci> <ci> k1 </ci> <ci> S1 </ci> </apply> </math> </kineticLaw> </reaction> <reaction id="reaction2" name="reaction2" reversible="false" fast="false"> <listOfReactants> <speciesReference species="S2" stoichiometry="1" constant="true"/> </listOfReactants> <listOfProducts> <speciesReference species="S1" stoichiometry="1" constant="true"/> </listOfProducts> <kineticLaw> <math xmlns="http://www.w3.org/1998/Math/MathML"> <apply> <times/> <ci> compartment </ci> <ci> k2 </ci> <ci> S2 </ci> </apply> </math> </kineticLaw> </reaction> </listOfReactions> </model> </sbml> '
	    sbmlDoc = $.parseXML(sbml);
	 	var $sbmlDoc = $(sbmlDoc);
	 	sbmlModel = new SbmlParser($sbmlDoc);
		var $sbmlModel = $(sbmlModel);
	 	tester = new Sim($sbmlModel);
	 	$("body").text(tester.simulate($sbmlDoc));

}
