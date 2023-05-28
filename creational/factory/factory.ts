enum InsuranceStatus {
	PENDING,
	ACTIVE,
	EXPIRED
}

interface IInsurance {
	id: number;
	status: InsuranceStatus;
	submit(): boolean;
}

class InsuranceA implements IInsurance {
	id: number;
	status: InsuranceStatus;
	submit() {
		return true;
	}
}

class InsuranceB implements IInsurance {
	id: number;
	status: InsuranceStatus;
	submit() {
		return false;
	}
}

abstract class InsuranceFactory {
	abstract createInsurance(): IInsurance;

	db: Map<number, InsuranceStatus> = new Map();
	saveHistory(insurance: IInsurance) {
		this.db.set(insurance.id, insurance.status);
	}
}

class InsuranceAFactory extends InsuranceFactory {
	createInsurance(): InsuranceA {
		return new InsuranceA()
	}
}

class InsuranceBFactory extends InsuranceFactory {
	createInsurance(): InsuranceB {
		return new InsuranceB()
	}
}

const insuranceAFactory = new InsuranceAFactory();
const insuranceBFactory = new InsuranceBFactory();
const insuranceA = insuranceAFactory.createInsurance();
const insuranceB = insuranceBFactory.createInsurance();
insuranceAFactory.saveHistory(insuranceA);
insuranceBFactory.saveHistory(insuranceB);