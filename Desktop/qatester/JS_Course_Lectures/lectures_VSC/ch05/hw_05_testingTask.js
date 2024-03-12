/*
Создать объект Testing, который обладает 7 принципами тестирования, и 4 типа тестирования обладают этими свойствами – 7-ью принципами тестирования из Силлабуса 4.0. Выведите в консоль текст, подтверждающий это.

Вариант 1 решения задачи:
*/

/*
const Testing = {
    principles: {
        "1": "Тестирование позволяет идентифицировать дефекты.",
        "2": "Избранное содержание тестирования может быть планируемым и непредвиденным.",
        "3": "Полное тестирование невозможно.",
        "4": "Тестирование показывает наличие дефектов, но не их отсутствие.",
        "5": "Скопированные тесты воспроизводят те же самые дефекты.",
        "6": "Тестирование обучает нас о продукте.",
        "7": "Конечно, вы можете получить продукт, который и без тестирования выглядит так, как будто он работает."
    },
    types: {
        unit: ["1", "2", "4", "6"],
        integration: ["1", "2", "4", "6"],
        system: ["1", "2", "4", "6"],
        acceptance: ["1", "2", "4", "6"]
    }
};

// Выводим подтверждающий текст
console.log("Объект Testing обладает следующими принципами тестирования:");

for (const principle in Testing.principles) {
    console.log(`- Принцип ${principle}: ${Testing.principles[principle]}`);
}

console.log("\nКаждый из 4 типов тестирования обладает следующими принципами:");

for (const type in Testing.types) {
    console.log(`- Тип ${type} тестирования: ${Testing.types[type].map(principle => `Принцип ${principle}`).join(", ")}`);
}
*/

/*
 код создает объект `Testing` с принципами тестирования и типами тестирования, а затем выводит текст в консоль, подтверждающий соответствие условиям задачи.
 
 
Вариант 2 решения задачи: 
 */
/*
const Testing = {
    principles: {
        presenceOfDefects: "Testing shows the presence, not the absence of defects.",
        exhaustiveTesting: "Exhaustive testing is impossible.",
        earlyTesting: "Early testing saves time and money.",
        defectsCluster: "Defects cluster together.",
        testsWearOut: "Tests wear out.",
        contextDependent: "Testing is context dependent.",
        absenceOfDefectsFallacy: "Absence-of-defects fallacy."
    },
    testTypes: {
        functional: "Functional testing evaluates the functions that a component or system should perform.",
        nonFunctional: "Non-functional testing is the testing of 'how well the system behaves'.",
        blackBox: "Black-box testing is specification-based and derives tests from documentation external to the test object.",
        whiteBox: "White-box testing is structure-based and derives tests from the system's implementation or internal structure (e.g., code, architecture, work flows, and data flows)."
    }
};

// Вывод в консоль
console.log("Testing Principles:");
for (const principle in Testing.principles) {
    console.log(`${principle}: ${Testing.principles[principle]}`);
}

console.log("\nTest Types:");
for (const type in Testing.testTypes) {
    console.log(`${type}: ${Testing.testTypes[type]}`);
}
*/

// Вариант 3 решения задачи:

const Testing = {
    principles: {
        presenceOfDefects: "Testing shows the presence, not the absence of defects.",
        exhaustiveTesting: "Exhaustive testing is impossible.",
        earlyTesting: "Early testing saves time and money.",
        defectsCluster: "Defects cluster together.",
        testsWearOut: "Tests wear out.",
        contextDependent: "Testing is context dependent.",
        absenceOfDefectsFallacy: "Absence-of-defects fallacy."
    },
    testTypes: {
        functional: "Functional testing evaluates the functions that a component or system should perform.",
        nonFunctional: "Non-functional testing is the testing of 'how well the system behaves'.",
        blackBox: "Black-box testing is specification-based and derives tests from documentation external to the test object.",
        whiteBox: "White-box testing is structure-based and derives tests from the system's implementation or internal structure (e.g., code, architecture, work flows, and data flows)."
    },
    // Метод для вывода всех принципов тестирования
    printPrinciples() {
        console.log("Testing Principles:");
        for (const principle in this.principles) {
            console.log(`${principle}: ${this.principles[principle]}`);
        }
    },
    // Метод для вывода всех типов тестирования
    printTestTypes() {
        console.log("\nTest Types:");
        for (const type in this.testTypes) {
            console.log(`${type}: ${this.testTypes[type]}`);
        }
    }
};

// Вызов методов для вывода информации в консоль
Testing.printPrinciples();
Testing.printTestTypes();

// Вариант 4 решения задачи:

const Testing = {
    principles: {
        presenceOfDefects: "Testing shows the presence, not the absence of defects.",
        exhaustiveTesting: "Exhaustive testing is impossible.",
        earlyTesting: "Early testing saves time and money.",
        defectsCluster: "Defects cluster together.",
        testsWearOut: "Tests wear out.",
        contextDependent: "Testing is context dependent.",
        absenceOfDefectsFallacy: "Absence-of-defects fallacy."
    },
    functionalTesting: function() {
        console.log("Functional testing evaluates the functions that a component or system should perform.  It has some principles: ");
        for (const principle in this.principles) {
            console.log(`${principle}: ${this.principles[principle]}`);
        }
    },
    nonFunctionalTesting: function() {
        console.log("Non-functional testing is the testing of 'how well the system behaves'. It has some principles: ");
        for (const principle in this.principles) {
            console.log(`${principle}: ${this.principles[principle]}`);
        }
    },
    blackBoxTesting: function() {
        console.log("Black-box testing is specification-based and derives tests from documentation external to the test object.  It has some principles: ");
        for (const principle in this.principles) {
            console.log(`${principle}: ${this.principles[principle]}`);
        }
    },
    whiteBoxTesting: function() {
        console.log("White-box testing is structure-based and derives tests from the system's implementation or internal structure (e.g., code, architecture, work flows, and data flows).  It has some principles: ");
        for (const principle in this.principles) {
            console.log(`${principle}: ${this.principles[principle]}`);
        }
    }
};

// Пример вызова функции и вывода свойств - принципов тестирования
Testing.functionalTesting();


 /****************************************************************************************************
Testing Principles
1. Testing shows the presence, not the absence of defects.
2. Exhaustive testing is impossible.
3. Early testing saves time and money.
4. Defects cluster together.
5. Tests wear out.
6. Testing is context dependent.
7. Absence-of-defects fallacy.

Test types:
1. Functional testing evaluates the functions that a component or system should perform.
2. Non-functional testing is the testing of “how well the system behaves”.
3. Black-box testing is specification-based and derives tests from documentation external to the test object.
4. White-box testing (see section 4.3) is structure-based and derives tests from the system's implementation or internal structure (e.g., code, architecture, work flows, and data flows).

*******************************************************************************************************
1.3.Testing Principles
 A number of testing principles offering general guidelines applicable to all testing have been suggested over the years. This syllabus describes seven such principles. 
1. Testing shows the presence, not the absence of defects. Testing can show that defects are present in the test object, but cannot prove that there are no defects (Buxton 1970). Testing reduces the probability of defects remaining undiscovered in the test object, but even if no defects are found, testing cannot prove test object correctness. 
2. Exhaustive testing is impossible. Testing everything is not feasible except in trivial cases (Manna 1978). Rather than attempting to test exhaustively, test techniques (see chapter 4), test case prioritization (see section 5.1.5), and risk-based testing (see section 5.2), should be used to focus test efforts. 
3. Early testing saves time and money. Defects that are removed early in the process will not cause subsequent defects in derived work products. The cost of quality will be reduced since fewer failures will occur later in the SDLC (Boehm 1981). To find defects early, both static testing (see chapter 3) and dynamic testing (see chapter 4) should be started as early as possible. 
4. Defects cluster together. A small number of system components usually contain most of the defects discovered or are responsible for most of the operational failures (Enders 1975). This phenomenon is an illustration of the Pareto principle. Predicted defect clusters, and actual defect clusters observed during testing or in operation, are an important input for risk-based testing (see section 5.2). 
5. Tests wear out. If the same tests are repeated many times, they become increasingly ineffective in detecting new defects (Beizer 1990). To overcome this effect, existing tests and test data may need to be modified, and new tests may need to be written. However, in some cases, repeating the same tests can have a beneficial outcome, e.g., in automated regression testing (see section 2.2.3). 
6. Testing is context dependent. There is no single universally applicable approach to testing. Testing is done differently in different contexts (Kaner 2011). 
7. Absence-of-defects fallacy. It is a fallacy (i.e., a misconception) to expect that software verification will ensure the success of a system. Thoroughly testing all the specified requirements and fixing all the defects found could still produce a system that does not fulfill the users’ needs and expectations, that does not help in achieving the customer’s business goals, and that is inferior compared to other competing systems. In addition to verification, validation should also be carried out (Boehm 1981).

********************************************************************************************************
Test Types.

A lot of test types exist and can be applied in projects. In this syllabus, the following four test types are addressed: 
1. Functional testing evaluates the functions that a component or system should perform. The functions are “what” the test object should do. The main objective of functional testing is checking the functional completeness, functional correctness and functional appropriateness. Non-functional testing evaluates attributes other than functional characteristics of a component or system. 
2. Non-functional testing is the testing of “how well the system behaves”. The main objective of nonfunctional testing is checking the non-functional software quality characteristics. The ISO/IEC 25010 standard provides the following classification of the non-functional software quality characteristics:
 • Performance efficiency
 • Compatibility
 • Usability
 • Reliability
 • Security
 • Maintainability
 • Portability
 It is sometimes appropriate for non-functional testing to start early in the life cycle (e.g., as part of reviews and component testing or system testing). Many non-functional tests are derived from functional tests as they use the same functional tests, but check that while performing the function, a non-functional constraint is satisfied (e.g., checking that a function performs within a specified time, or a function can be ported to a new platform). The late discovery of non-functional defects can pose a serious threat to the success of a project. Non-functional testing sometimes needs a very specific test environment, such as a usability lab for usability testing. 
3. Black-box testing (see section 4.2) is specification-based and derives tests from documentation external to the test object. The main objective of black-box testing is checking the system's behavior against its specifications. 
4. White-box testing (see section 4.3) is structure-based and derives tests from the system's implementation or internal structure (e.g., code, architecture, work flows, and data flows). The main objective of white-box testing is to cover the underlying structure by the tests to the acceptable level. 
All the four above mentioned test types can be applied to all test levels, although the focus will be different at each level. Different test techniques can be used to derive test conditions and test cases for all the mentioned test types.

 */