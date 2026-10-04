// Central image config. Components never hold URLs; they ask for a slot by name: <Photo slot="hr" />.
// Each slot tries `local` first (drop your own file in /public/media/<name>.jpg), then `remote`.
// If both fail, the tile shows a tinted placeholder labelled with the role, so layouts never break.
//
// STATUS: creator, filmmaker and madFilms use Pexels IDs that appeared in Pexels search results (film-set photos).
// hero/executive reuse portrait IDs from the earlier codebase. None have been viewed in a browser.
// HONESTY NOTE: the build sandbox had no network, so NO remote URL below has been opened or visually checked.
// Pexels IDs marked `seen:true` are reused from the existing codebase (chosen earlier, also unverified).
// Slots with remote:null have no photo chosen yet. Open each slot in the browser, pick a licensed photo
// (Pexels / Unsplash), and either paste its URL into `remote` or save it as /public/media/<slot>.jpg.
const px = (id, w = 1600) => `https://images.pexels.com/photos/${id}/pexels-photo-${id}.jpeg?auto=compress&cs=tinysrgb&w=${w}`;
const slot = (name, role, remote, alt, pos = "center") => ({ local: `/media/${name}.jpg`, remote, role, alt, pos });
// Numbered files: save your images as /public/media/1.jpg, 2.jpg ... (numbers match PROMPTS.md). Remote URLs are only a stop-gap.

export const IMG = {
  hero:        slot(1, "Business leader", px(1239291, 1400), "A business leader reviewing a report", "50% 25%"),
  executive:   slot("executive", "Executive", px(2379004), "A leadership team reviewing work together"),
  hr:          slot(2, "Recruiter", px(3184291), "A recruiter in conversation with a candidate"),
  finance:     slot(3, "Finance professional", px(3184663), "A finance team reviewing documents"),
  procurement: slot(4, "Procurement lead", px(3756679), "A team collaborating over a purchase decision"),
  sales:       slot(5, "Sales professional", px(1043471), "A salesperson on a call with a client", "50% 30%"),
  marketing:   slot(6, "Marketing lead", px(3184359), "A marketing team in a modern workspace"),
  it:          slot(7, "IT specialist", px(3861969), "IT staff at their monitors"),
  support:     slot(8, "Support specialist", px(733872), "A customer checking an order on her phone", "50% 30%"),
  operations:  slot(9, "Operations manager", px(3184418), "An operations team reviewing work"),
  healthcare:  slot(10, "Healthcare professional", px(3825527), "A doctor speaking with a patient"),
  creator:     slot(11, "Creator", px(3935026, 1000), "A content creator filming a product"),
  filmmaker:   slot(12, "Filmmaker", px(3935027, 1000), "A filmmaker on set with a camera"),
  madFilms:    slot(13, "MAD Films", px(3045397, 2000), "Film still from a MAD Films production"),
  story1:      slot(14, "Enterprise", px(3756679, 2000), "A diverse team collaborating"),
  story2:      slot(15, "Government", px(3184418, 2000), "A team reviewing work together"),
  story3:      slot(16, "Healthcare", px(3825527, 2000), "A doctor speaking with a patient"),
  human:       slot(17, "People", px(3184291, 2000), "A team in discussion around a table"),
  dark:        slot("dark", "Technology", px(3861969, 2000), "Engineers working in a technology workspace"),
};
