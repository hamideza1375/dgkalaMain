import { useImmer } from "use-immer";

const [filteredContacts, setFilteredContacts] = useImmer([]);

setFilteredContacts((draft) => {
  draft.push(data);
});
