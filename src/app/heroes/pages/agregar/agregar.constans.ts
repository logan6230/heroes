import {
    DynamicFormModel,
    DynamicCheckboxModel,
    DynamicInputModel,
    DynamicRadioGroupModel
} from "@ng-dynamic-forms/core";

export const MY_FORM_MODEL: DynamicFormModel = [

    

    new DynamicInputModel({
        id: "superhero",
        label: "superhero",
        maxLength: 42,
        placeholder: "add superhero"
    }),
    new DynamicInputModel({
        id: "publisher",
        label: "publisher",
        maxLength: 42,
        placeholder: "add publisher"
    }),
    new DynamicInputModel({
        id: "alter_ego",
        label: "Alter ego",
        maxLength: 42,
        placeholder: "add Alter Ego"
    }),
    new DynamicInputModel({
        id: "first_appearance",
        label: "First Appearance",
        maxLength: 42,
        placeholder: "First Appearance"
    }),
    new DynamicInputModel({
        id: "characters",
        label: "Characters",
        maxLength: 42,
        placeholder: "Characters"
    }),

    // new DynamicRadioGroupModel<string>({
    //     id: "sampleRadioGroup",
    //     label: "Sample Radio Group",
    //     options: [
    //         {label: "Option 1", value: "option-1"},
    //         {label: "Option 2", value: "option-2"},
    //         {label: "Option 3", value: "option-3"}
    //     ],
    //     value: "option-3"
    // }),

    // new DynamicCheckboxModel({
    //     id: "sampleCheckbox",
    //     label: "I do agree"
    // })
];

