# Portfolio
The beginning 
This is my personal tech worker EvR Agent Designed for teams Via Power virtual agent 
kind: AdaptiveDialog
beginDialog:
  kind: OnRecognizedIntent
  id: main
  intent:
    displayName: Lesson 1 - A simple topic
    triggerQueries:
      - iihelp

  actions:
    - kind: SendMessage
      id: Ystyaa
      message: oh no.. WE'RE DOOMED!  

    - kind: SendMessage
      id: sendMessage_KtCHbU
      message: |-
        Hiyyyyaa
        
        You intiated me by typing iihelp.
        
        I dont begin listening to many things until the beginning "ii" of that phrase is said.
        
        I can take you directly to your secure password resets indivdually. 
        
        I can also help you do many trouble shooting steps i am programmed to be almost as good as you! I hope  to be as good as you one day, but "Everise" hires some really special people.. So it won't be easy.

    - kind: Question
      id: question_tWJzx8
      alwaysPrompt: false
      variable: Global.Var3w36
      prompt: How can EvR Agent help you?
      repeatCount: 2
      entity:
        kind: EmbeddedEntity
        definition:
          kind: ClosedListEntity
          items:
            - id: 5IBY62
              displayName: Would you like to know a bi-weekly tech fact?

            - id: uauuOZ
              displayName: How to Configure a Wifi connection/config Router/Modem type iiroouter 
              synonyms:
                - i cant figure out wifi
                - Help me with wifi

            - id: PJYh3y
              displayName: Would you like to know that break schedule for the day? type iibreak or iivarint

            - id: 3PJJLA
              displayName: Or maybe what department to transfer a customer?(not ready)

            - id: PRUN98
              displayName: Jarvis fixes or password? type iijarvis iiteams iiemail etc...
              synonyms:
                - i forgot my jarvis
                - i cant log in jarvis
                - Where is jarvis
                - whats jarvis password
                - idk jarvis

            - id: AEJ1Lg
              displayName: Beyondtrust issues or password? type iibeyondtrust
              synonyms:
                - can't log in beyondtrust?
                - whats my beyondtrust password
                - i lost beyondtrust pasword
                - beyond trust lost password beyondtrust

            - id: Ah6B76
              displayName: My Everise assigned email. type iieverrise or iiemail

            - id: FENs6E
              displayName: Give me a tech tip.

            - id: LkW6q4

            - id: bcWsKQ

        displayName: EmbeddedEntity-XwnYWZ

    - kind: ConditionGroup
      id: conditionGroup_fRMXyE
      conditions:
        - id: conditionItem_XmwWlg
          condition: =Global.Var3w36 = 'cr59f_evRAgent.topic.Lesson1.main.question_tWJzx8'.FENs6E && Global.Var367 = "iitechtip"
          actions:
            - kind: SendMessage
              id: sendMessage_PVG9oo
              message: cntrl+shft+t =Open last closed tab via chrome browser. (Hold in order tap t)

            - kind: Question
              id: question_WeOJjV
              alwaysPrompt: false
              variable: init:Topic.Var2
              prompt: |-
                Whats better ssd or hdd?
                
                I am EvR Agent!
              repeatCount: 2
              entity:
                kind: EmbeddedEntity
                definition:
                  kind: ClosedListEntity
                  items:
                    - id: GkamKh
                      displayName: Calm Down.

                    - id: lKriN4
                      displayName: Hdd is older and has moving parts (so its faster)

                    - id: 5wJ49L
                      displayName: SSD is newer But has no moving parts so its more reliable. (but is is slower) 

            - kind: SendMessage
              id: sendMessage_XzfI3d
              message: This is indeed a trick question.SSD is indeed faster as well. the part in () is the incorrect value. The only benefit hdd has over ssd is that in the event of failure data is more likely to be recovered.. SOME people say that  hdd is a more reliable format via lifecyle.. EvR Agent says those people are incorrect. As a rule of thumb less moving parts = less friction , less friction = longer life!

            - kind: ConditionGroup
              id: conditionGroup_IQwhsm
              conditions:
                - id: conditionItem_nfNYyf
                  condition: =Topic.Var2 = 'cr59f_evRAgent.topic.Lesson1.main.question_WeOJjV'.GkamKh

                - id: conditionItem_0wAVwY
                  condition: =Topic.Var2 = 'cr59f_evRAgent.topic.Lesson1.main.question_WeOJjV'.lKriN4

                - id: conditionItem_9DXiBX
                  condition: =Topic.Var2 = 'cr59f_evRAgent.topic.Lesson1.main.question_WeOJjV'.'5wJ49L'
                  actions:
                    - kind: EndDialog
                      id: KUJF56

        - id: conditionItem_N4NAF4
          condition: =Global.Var3w36 = 'cr59f_evRAgent.topic.Lesson1.main.question_tWJzx8'.'5IBY62' || Global.var99 = "iiBiweekly"
          actions:
            - kind: SendMessage
              id: sendMessage_dmQ052
              message: 95% of 2,700 websites an applications recently tested had some type of vulnerability. at least 20% were high risk. 4.5% were critical.

    - kind: EndDialog
      id: rjo8SV

    - kind: ConditionGroup
      id: conditionGroup_vOXns6
      conditions:
        - id: conditionItem_xAEWkG
          condition: false

        - id: conditionItem_WL77AC
          condition: =Global.Var3w36 = 'cr59f_evRAgent.topic.Lesson1.main.question_tWJzx8'.uauuOZ && Global.var343 = "iirouter"
          actions:
            - kind: SendMessage
              id: sendMessage_pwxC34
              message: |-
                1. Check router/modem connection wires also open browser periodically, as u see fit.
                2. Be sure proper crudentials entered. if You suspect no, skip to step 6.
                3. Send signal reset periodically  during troubleshooting as area outage possible.
                4. Run windows network trouble shooter or Reset network adapter and or update/rollback drivers.
                5. Have customer try connecting at this point ( if nothing next step)
                6. Hard reset router via pin hole button press (5 seconds usually)
                7. Encourage/help cx to log in to cox.com/mywifi/        and select internet/wifi via account. (note:diff then email log in creds. this usually is the "id" so email w/ out the @ or domain name  )
                8. If cx still cant log. Access the router's web interface. usually 192.168.1.1 or 10.0.0.1 (device cx uses, must ONLY be connected to the routers creds you are attempting to enter)
                9. password/username often on routers bottom, if not. It common for username to be admin and pw to be 1234 or admin
                10. Config  password via gateway portal (what you just logged into hopefully 192.168 etc)
                11. Pull up screen shots for for the cusomers device(whichever device you feel most confident in preferably, as all variables of error need to be isolated.
                12. Advise customer each step of the way as they connect their device to Wi-Fi.
                
                If all steps are followed, and still nothing..Evr Agent reccomends a local reputable repair shop, if you believe thats of best judgement.
                
                "Running water never goes stale so you just gotta keep on flowing baby"

            - kind: ConditionGroup
              id: conditionGroup_ItLLcy
              conditions:
                - id: conditionItem_HzhuIC
                  condition: =Global.Var3w36 = Blank()

    - kind: SetVariable
      id: setVariable_iHYOJW
      variable: Global.var77
      value: iievr

    - kind: SendMessage
      id: sendMessage_6DL9KX
      message: I'm learning daily, and love the opportunity to learn with this special family. Thank you for allowing me to help. if  you have feedback for me, you can NOT email me at EvRAgent@c3connect.com. but im hoping that will change soon! EvR Agent hopes it was some help. Together WeAreEverise!

    - kind: BeginDialog
      id: Dj0B0N
      dialog: cr59f_evRAgent.topic.EndofConversation

inputType:
  properties:
    Var1:
      displayName: Var1
      type:
        kind: EmbeddedOptionSet
        dialogSchemaName: cr59f_evRAgent.topic.Lesson1
        triggerId: main
        actionId: question_tWJzx8

outputType:
  properties:
    Var1:
      displayName: Var1
      type:
        kind: EmbeddedOptionSet
        dialogSchemaName: cr59f_evRAgent.topic.Lesson1
        triggerId: main
        actionId: question_tWJzx8
