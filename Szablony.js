import { ColorGray10, ColorTextStrong, hintIconId} from "../e2e/variables.js";
const Template = {
  banner_2023_lista:  `describe("Komponent HINT_ICON_2023", () => {
    const hintIconId = "LiferayComponentIdNumber";
    it("Sprawdzenie wymiarów kontenera", () => { 
      cy.get("${hintIconId}" article.mds.bm-container").should("have.css", "max-width", "1600px");
      cy.get("${hintIconId}" article.mds.bm-container").should("have.css", "margin").should("be.oneOf", ["0px auto 48px", "0px 160px 48px"]);
      cy.get("${hintIconId}" article.mds.bm-container").should("have.css", "display", "flex");
      cy.get("${hintIconId}" article.mds.bm-container").should("have.css", "flex-flow").should("be.oneOf", ["row wrap", "wrap"]);
      cy.get("${hintIconId}" article.mds.bm-container").should("have.css", "column-gap", "20px");
      cy.get("${hintIconId}" article.mds.bm-container").should("have.css", "line-height", "24px");
    })
    it("Sprawdzenie pozycjonowania kontenera", () => {
      cy.get("${hintIconId} article.mds.bm-container div.mds.bm-hint-icon__wrapper.bm-col-d-8.bm-offset-d-2").should("have.css", "flex-basis", "auto");
      cy.get("${hintIconId} article.mds.bm-container div.mds.bm-hint-icon__wrapper.bm-col-d-8.bm-offset-d-2").should("have.css", "width").should((width) => {
        // ensure the unit is in pixels
        expect(width).to.include('px')
        // get Number value and assert "381.15625px"
        expect(parseInt(width, 10)).to.be.within(1059, 1060);
      });;
      cy.get("${hintIconId} article.mds.bm-container div.mds.bm-hint-icon__wrapper.bm-col-d-8.bm-offset-d-2").should("have.css", "min-width", "0px");
      cy.get("${hintIconId} article.mds.bm-container div.mds.bm-hint-icon__wrapper.bm-col-d-8.bm-offset-d-2").should("have.css", "box-sizing", "border-box");
      cy.get("${hintIconId} article.mds.bm-container div.mds.bm-hint-icon__wrapper.bm-col-d-8.bm-offset-d-2").should("have.css", "margin-left").should((width) => {
        // ensure the unit is in pixels
        expect(width).to.include('px')
        // get Number value and assert "381.15625px"
        expect(parseInt(width, 10)).to.be.within(269, 270);
      });;
    })
    it("Sprawdzenie środka kontenera", () => {
      cy.get("${hintIconId} article.mds.bm-container div.mds.bm-hint-icon__wrapper.bm-col-d-8.bm-offset-d-2 div.mds.bm-hint-icon").should("have.css", "width").should((width) => {
        // ensure the unit is in pixels
        expect(width).to.include('px')
        // get Number value and assert "381.15625px"
        expect(parseInt(width, 10)).to.be.within(1059, 1060);
      });
      cy.get("${hintIconId} article.mds.bm-container div.mds.bm-hint-icon__wrapper.bm-col-d-8.bm-offset-d-2 div.mds.bm-hint-icon").should("have.css", "border").should("be.oneOf", ["1.33333px solid rgb(211, 211, 211)", "1px solid rgb(211, 211, 211)"]);
      cy.get("${hintIconId} article.mds.bm-container div.mds.bm-hint-icon__wrapper.bm-col-d-8.bm-offset-d-2 div.mds.bm-hint-icon").should("have.css", "background-color", "rgb(249, 249, 249)");
      cy.get("${hintIconId} article.mds.bm-container div.mds.bm-hint-icon__wrapper.bm-col-d-8.bm-offset-d-2 div.mds.bm-hint-icon").should("have.css", "border-radius", "10px");
      cy.get("${hintIconId} article.mds.bm-container div.mds.bm-hint-icon__wrapper.bm-col-d-8.bm-offset-d-2 div.mds.bm-hint-icon").should("have.css", "padding", "32px");
      cy.get("${hintIconId} article.mds.bm-container div.mds.bm-hint-icon__wrapper.bm-col-d-8.bm-offset-d-2 div.mds.bm-hint-icon").should("have.css", "margin", "0px");
      cy.get("${hintIconId} article.mds.bm-container div.mds.bm-hint-icon__wrapper.bm-col-d-8.bm-offset-d-2 div.mds.bm-hint-icon").should("have.css", "box-sizing", "border-box");
      cy.get("${hintIconId} article.mds.bm-container div.mds.bm-hint-icon__wrapper.bm-col-d-8.bm-offset-d-2 div.mds.bm-hint-icon").should("have.css", "line-height", "24px");
    })
    it("Sprawdzenie środka kontenera - zawartość", () => {
      cy.get("${hintIconId} article.mds.bm-container div.mds.bm-hint-icon__wrapper.bm-col-d-8.bm-offset-d-2 div.mds.bm-hint-icon__content").should("have.css", "display", "flex");
      cy.get("${hintIconId} article.mds.bm-container div.mds.bm-hint-icon__wrapper.bm-col-d-8.bm-offset-d-2 div.mds.bm-hint-icon__content").should("have.css", "margin", "0px");
      cy.get("${hintIconId} article.mds.bm-container div.mds.bm-hint-icon__wrapper.bm-col-d-8.bm-offset-d-2 div.mds.bm-hint-icon__content").should("have.css", "box-sizing", "border-box");
      cy.get("${hintIconId} article.mds.bm-container div.mds.bm-hint-icon__wrapper.bm-col-d-8.bm-offset-d-2 div.mds.bm-hint-icon__content").should("have.css", "line-height", "24px");
      cy.get("${hintIconId} article.mds.bm-container div.mds.bm-hint-icon__wrapper.bm-col-d-8.bm-offset-d-2 div.mds.bm-hint-icon__content").should("have.css", "transition", "0.6s ease-out");
    })
    it("Sprawdzenie ikony", () => {
      cy.get("${hintIconId} article.mds.bm-container div.mds.bm-hint-icon__wrapper.bm-col-d-8.bm-offset-d-2 div.mds.bm-hint-icon__content div.mds.bm-hint-icon__img__wrapper").should("have.css", "width", "48px");
      cy.get("${hintIconId} article.mds.bm-container div.mds.bm-hint-icon__wrapper.bm-col-d-8.bm-offset-d-2 div.mds.bm-hint-icon__content div.mds.bm-hint-icon__img__wrapper").should("have.css", "min-width", "48px");
      cy.get("${hintIconId} article.mds.bm-container div.mds.bm-hint-icon__wrapper.bm-col-d-8.bm-offset-d-2 div.mds.bm-hint-icon__content div.mds.bm-hint-icon__img__wrapper").should("have.css", "height", "48px");
      cy.get("${hintIconId} article.mds.bm-container div.mds.bm-hint-icon__wrapper.bm-col-d-8.bm-offset-d-2 div.mds.bm-hint-icon__content div.mds.bm-hint-icon__img__wrapper").should("have.css", "margin-right", "24px");
      cy.get("${hintIconId} article.mds.bm-container div.mds.bm-hint-icon__wrapper.bm-col-d-8.bm-offset-d-2 div.mds.bm-hint-icon__content div.mds.bm-hint-icon__img__wrapper").should("have.css", "box-sizing", "border-box");
      cy.get("${hintIconId} article.mds.bm-container div.mds.bm-hint-icon__wrapper.bm-col-d-8.bm-offset-d-2 div.mds.bm-hint-icon__content div.mds.bm-hint-icon__img__wrapper").should("have.css", "line-height", "24px");
      cy.get("${hintIconId} article.mds.bm-container div.mds.bm-hint-icon__wrapper.bm-col-d-8.bm-offset-d-2 div.mds.bm-hint-icon__content div.mds.bm-hint-icon__img__wrapper img").should("be.visible");
    })
    it("Sprawdzenie kontenera na treści", () => {
      cy.get("${hintIconId} article.mds.bm-container div.mds.bm-hint-icon__wrapper.bm-col-d-8.bm-offset-d-2 div.mds.bm-hint-icon__content div.mds.bm-hint-icon__content__outer").should("have.css", "display", "flex"); 
      cy.get("${hintIconId} article.mds.bm-container div.mds.bm-hint-icon__wrapper.bm-col-d-8.bm-offset-d-2 div.mds.bm-hint-icon__content div.mds.bm-hint-icon__content__outer").should("have.css", "align-items", "center"); 
      cy.get("${hintIconId} article.mds.bm-container div.mds.bm-hint-icon__wrapper.bm-col-d-8.bm-offset-d-2 div.mds.bm-hint-icon__content div.mds.bm-hint-icon__content__outer").should("have.css", "min-height", "48px"); 
    })
    it ("Sprawdzenie pozycjonowania treści", () => {
      cy.get("${hintIconId} article.mds.bm-container div.mds.bm-hint-icon__wrapper.bm-col-d-8.bm-offset-d-2 div.mds.bm-hint-icon__content div.mds.bm-hint-icon__content__outer div.mds.bm-hint-icon__content__inner").should("have.css", "display", "flex"); 
      cy.get("${hintIconId} article.mds.bm-container div.mds.bm-hint-icon__wrapper.bm-col-d-8.bm-offset-d-2 div.mds.bm-hint-icon__content div.mds.bm-hint-icon__content__outer div.mds.bm-hint-icon__content__inner").should("have.css", "flex-direction", "column"); 
      cy.get("${hintIconId} article.mds.bm-container div.mds.bm-hint-icon__wrapper.bm-col-d-8.bm-offset-d-2 div.mds.bm-hint-icon__content div.mds.bm-hint-icon__content__outer div.mds.bm-hint-icon__content__inner").should("have.css", "gap", "8px"); 
    })
    it("Sprawdzenie nagłowka", () => {
      cy.get("${hintIconId} article.mds.bm-container div.mds.bm-hint-icon__wrapper.bm-col-d-8.bm-offset-d-2 div.mds.bm-hint-icon__content div.mds.bm-hint-icon__content__outer div.mds.bm-hint-icon__content__inner p.mds.bm-text--dim.bm-text--bold").should("have.css", "margin-bottom", "0px");
      cy.get("${hintIconId} article.mds.bm-container div.mds.bm-hint-icon__wrapper.bm-col-d-8.bm-offset-d-2 div.mds.bm-hint-icon__content div.mds.bm-hint-icon__content__outer div.mds.bm-hint-icon__content__inner p.mds.bm-text--dim.bm-text--bold").should("have.css", "font-weight", "700");
      cy.get("${hintIconId} article.mds.bm-container div.mds.bm-hint-icon__wrapper.bm-col-d-8.bm-offset-d-2 div.mds.bm-hint-icon__content div.mds.bm-hint-icon__content__outer div.mds.bm-hint-icon__content__inner p.mds.bm-text--dim.bm-text--bold").should("have.css", "color", "${ColorTextStrong}");
      cy.get("${hintIconId} article.mds.bm-container div.mds.bm-hint-icon__wrapper.bm-col-d-8.bm-offset-d-2 div.mds.bm-hint-icon__content div.mds.bm-hint-icon__content__outer div.mds.bm-hint-icon__content__inner p.mds.bm-text--dim.bm-text--bold").should("have.css", "line-height", "22px");
      cy.get("${hintIconId} article.mds.bm-container div.mds.bm-hint-icon__wrapper.bm-col-d-8.bm-offset-d-2 div.mds.bm-hint-icon__content div.mds.bm-hint-icon__content__outer div.mds.bm-hint-icon__content__inner p.mds.bm-text--dim.bm-text--bold").should("have.css", "font-size", "16px");  
    })
    it("Sprawdzenie tekstu", () => {
      cy.get("${hintIconId} article.mds.bm-container div.mds.bm-hint-icon__wrapper.bm-col-d-8.bm-offset-d-2 div.mds.bm-hint-icon__content div.mds.bm-hint-icon__content__outer div.mds.bm-hint-icon__content__inner p").first().should("have.css", "font-size", "16px");  
      cy.get("${hintIconId} article.mds.bm-container div.mds.bm-hint-icon__wrapper.bm-col-d-8.bm-offset-d-2 div.mds.bm-hint-icon__content div.mds.bm-hint-icon__content__outer div.mds.bm-hint-icon__content__inner p").first().should("have.css", "line-height", "22px");  
      cy.get("${hintIconId} article.mds.bm-container div.mds.bm-hint-icon__wrapper.bm-col-d-8.bm-offset-d-2 div.mds.bm-hint-icon__content div.mds.bm-hint-icon__content__outer div.mds.bm-hint-icon__content__inner p").first().should("have.css", "color", "${ColorTextStrong}");  
    })
  })`
    ,
    banner_2023_paragraf: "george"
}


export {Template};
