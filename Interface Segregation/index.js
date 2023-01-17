class Document {}

class Machine {
  constructor() {
    if (this.constructor.name == "Machine") {
      throw new Error("Machine is abstract");
    }
    print(doc){}
    fax(doc){}
    scan(doc){}
  }
}

class MultiFunctionPrinter extends Machine {
    print(){

    }
    fax(doc){
        super.fax(doc);
    }
    scan(doc){
        super.scan(doc)
    }
}

class OldFashionedPrinter extends Machine
{
    print(){
        //ok
    }
    fax(doc){
        //do nothing
    }
    scan(doc){
        //do nothing
    }
}