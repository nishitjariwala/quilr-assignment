import React from "react";
import { fields, operators, logicOptions } from "../constants";
import { Group, Condition, Field, Operator, Logic } from "../schema/schemas";
import SelectBox from "./SelectBox";
import { Button } from "@mui/material";


const GroupComponent = ({
    group,
    onChange,
    onRemove
}: {
    group: Group;
    onChange: (updated: Group) => void;
    onRemove?: () => void;
}) => {
    const updateCondition = (index: number, updated: Condition | Group) => {
        const updatedConditions = [...group.conditions];
        updatedConditions[index] = updated;
        onChange({ ...group, conditions: updatedConditions });
    };

    const addCondition = () => {
        onChange({
            ...group,
            conditions: [
                ...group.conditions,
                {
                    field: "Status",
                    operator: "equals",
                    value: fields["Status"][0]
                }
            ]
        });
    };

    const addGroup = () => {
        onChange({
            ...group,
            conditions: [
                ...group.conditions,
                {
                    logic: "AND",
                    conditions: []
                }
            ]
        });
    };

    const removeCondition = (index: number) => {
        const updated = [...group.conditions];
        updated.splice(index, 1);
        onChange({ ...group, conditions: updated });
    };

    return (
        <div className="space-y-4 border  p-4 rounded-lg  shadow-sm">
            <div className="flex items-center gap-4">
                <label className="text-sm font-medium text-gray-700">Logic:</label>
                <SelectBox
                    label="Logic"
                    value={group.logic}
                    options={logicOptions}
                    onChange={(val: string) => onChange({ ...group, logic: val as Logic })}
                />
                {onRemove && (
                    <Button
                        variant="text"
                        color="error"
                        size="small"
                        onClick={onRemove}
                        className=" ml-auto"
                    >
                        Remove Logic
                    </Button>
                )}
            </div>

            <div className="space-y-4 pl-4 border-l-2 border-gray-200">
                {group.conditions.map((condition, index) =>
                    "field" in condition ? (
                        <div
                            key={index}
                            className="flex flex-wrap items-center gap-4 p-3 rounded-md"
                        >
                            <SelectBox
                                label="Field"
                                value={condition.field}
                                options={Object.keys(fields)}
                                onChange={(val: string) =>
                                    updateCondition(index, {
                                        ...condition,
                                        field: val as Field,
                                        value: fields[val as Field][0]
                                    })
                                }
                            />
                            <SelectBox
                                label="Operator"
                                value={condition.operator}
                                options={operators}
                                onChange={(val: string) =>
                                    updateCondition(index, { ...condition, operator: val as Operator })
                                }
                            />
                            <SelectBox
                                label="Value"
                                value={condition.value}
                                options={fields[condition.field]}
                                onChange={(val: string) =>
                                    updateCondition(index, { ...condition, value: val })
                                }
                            />
                            <Button
                                variant="text"
                                color="error"
                                size="small"
                                onClick={() => removeCondition(index)}
                                className=" ml-auto"
                            >
                                Remove Condition
                            </Button>
                        </div>
                    ) : (
                        <GroupComponent
                            key={index}
                            group={condition}
                            onChange={(newGroup) => updateCondition(index, newGroup)}
                            onRemove={() => removeCondition(index)}
                        />
                    )
                )}
            </div>

            <div className="flex gap-3">
                <Button
                    variant="outlined"
                    color="primary"
                    size="small"
                    onClick={addCondition}
                >
                    Add Condition
                </Button>

                <Button
                    variant="outlined"
                    color="secondary"
                    size="small"
                    onClick={addGroup}
                >
                    Add Logic Group
                </Button>
            </div>
        </div>
    );
};

export default GroupComponent;
