const useListToString = (list: string[]) => {
    let skillsText = "";
    list.map((newText) => {
        skillsText = skillsText + ` ${newText},`;
    });
    skillsText = skillsText.slice(0, -1);
    return skillsText;
};

export default useListToString;
