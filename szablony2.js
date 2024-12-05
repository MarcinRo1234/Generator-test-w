
export const Banner_2023_list = 
    describe("Komponent PROMO_BOX_2023", () => {
        it("Sprawdzenie wymiarów komponentu", () => {
        cy.get("div#p_p_id_com_liferay_journal_content_web_portlet_JournalContentPortlet_INSTANCE_0eSEXWkw0G42_ div.mds.bm-container.bm-promo-box-group-expand ul.bm-col-d-9.bm-promo-box-group-expand__visible").should("have.css", "width", "1195px");
        cy.get("div#p_p_id_com_liferay_journal_content_web_portlet_JournalContentPortlet_INSTANCE_0eSEXWkw0G42_ div.mds.bm-container.bm-promo-box-group-expand ul.bm-col-d-9.bm-promo-box-group-expand__visible").should("have.css", "height").should((height) => {
            // ensure the unit is in pixels
            expect(height).to.include('px')
            // get Number value and assert "381.15625px"
            expect(parseInt(height, 10)).to.be.within(564, 566);
        });