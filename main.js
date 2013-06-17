$(function() {
    var sbml = '<?xml version="1.0" encoding="UTF-8"?> <sbml xmlns="http://www.sbml.org/sbml/level1" level="1" version="2"> <model name="case00001"> <listOfCompartments> <compartment name="compartment" volume="1" units="volume"/> </listOfCompartments> <listOfSpecies> <species name="S1" compartment="compartment" initialAmount="0.00015" units="substance"/> <species name="S2" compartment="compartment" initialAmount="0" units="substance"/> </listOfSpecies> <listOfParameters> <parameter name="k1" value="1"/> </listOfParameters> <listOfReactions> <reaction name="reaction1" reversible="false"> <listOfReactants> <speciesReference species="S1"/> </listOfReactants> <listOfProducts> <speciesReference species="S2"/> </listOfProducts> <kineticLaw formula="compartment * k1 * S1"/> </reaction> </listOfReactions> </model> </sbml>';
    var sbmlDoc = $.parseXML(sbml);
    var $sbmlDoc = $(sbmlDoc);
    var sbmlModel = new SbmlParser($sbmlDoc);
    var tester = new Sim(sbmlModel);

});