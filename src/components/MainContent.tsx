import FixedEntry from "./FixedEntry";
import JournalEntry from "./JournalEntry";

function MainContent(): JSX.Element {
  return (
    <main>
      <FixedEntry />
      <FixedEntry />
      <JournalEntry
        title={"Discovering React components"}
        tags={["react", "components", "reusability"]}
        body={"Today, I discovered reusable React components - I love them! It makes things so much more convenient!"}
        views={1}
        likes={1}
        postDate={{ month: "June", day: 13, year: 2021 }}
      />
      <JournalEntry
        title={"Dreaming of Stones"}
        tags={["dreams", "sleep", "insights"]}
        body={
          "Recently, I've been trying out a new tactic to try to help myself fall asleep: counting stones. Normally, we count sheep to fall asleep - my problem is that I think sheep are fascinating animals, so this really doesn't help me. However, I think we can all agree that stones are boring (sorry, geologists) - so I've been counting stones instead!"
        }
        views={10}
        likes={5}
        postDate={{ month: "March", day: 3, year: 2003 }}
      />
      <JournalEntry 
        title={"Writing poetry"}
        tags={["poetry", "meta"]}
        body={"Being creative... I'd like to do more of it. I'll write some haikus!"}
        views={93}
        likes={11}
        postDate={{ month: "March", day: 2, year: 2003}}
      />
      <JournalEntry 
        title={"The trolley problem"}
        tags={["philosophy"]}
        body={"I came across the Trolley Problem recently. I found it deeply troubling... why is it called 'the Trolley Problem' when it's actually about trains?"}
        views={2}
        likes={0}
        postDate={{ month: "July", day: 28, year: 2003}}
      />
    </main>
  );
}

export default MainContent;
