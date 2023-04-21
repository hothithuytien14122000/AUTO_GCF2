Feature: Inmegers
    Scenario: IT#1
        Given User opens Trang chủ Inmegers
        When Show modal login
        And  User enter email ikfohldhvid@valanides.com
        And User enter password 123
        And User submit Login
        And User click account
        And User click profile
        And User click button Buyer
        And User click on the Profile that the user want to edit
        And User click on the icon edit
        And User click Become a Franchisee
        And User click button next
        And User enter data in the fields Last name
        And User enter data in the fields First name
         And User enter data in the fields Email
        And User select Anguilla (+1-264) in the fields Nationality
        And User enter data in the fields Phone Number
         And User click button next
         And User slect Doanh nghiệp Your title
         And User select Khai khoáng khác Main industry
        And User select Khai thác quặng kim loại Other industries
         And User enter data in the fileds Name of service product to be franchised
         And User enter data in the Estimated budget range
         And User select Your current location
         And User select Location you want to receive franchise from
         And User enter data in the fileds Your company name
         And User enter data in the fileds Website or social media
        And User enter data in the fileds Industry of your business
        And User enter data in the fileds Expected criterials from franchisor
        And User enter data in the fileds About your business
        And User click button next
        And User click button next
        And User Select package payment
        # And User confirm Payment
        And User click button Thanh toán
        And User click text Thanh toán
        And User Click button Accept payment
        Then User click button next