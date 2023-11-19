import { cModuleName, Translate } from "../utils/PerceptiveUtils.js";

const cWindowID = "vision-channels-window";
const cConfirmIcon = "fa-solid fa-check";
const cAddIcon = "fa-solid fa-plus";
const cSettingName = "VisionChannels";

const cDefaultChannel = {
	Name : "Vision Channel",
	Color : "#ffffff",
	RequiredtoSee : false,
	SeethroughWalls : false,
	Range : -1,
	EffectFilter : null,
	Transparency : 1
};

class VisionChannelsWindow extends Application {
	constructor(pOptions = {}) {
		super(pOptions);
		
		this.vOptions = pOptions;
	}
	
	//app stuff
	static get defaultOptions() {
		return mergeObject(super.defaultOptions, {
			classes: [cWindowID],
			popOut: true,
			width: 800,
			height: 400,
			template: `modules/${cModuleName}/templates/${cWindowID}.html`,
			jQuery: true,
			title: Translate(cWindowID + ".titles." + "VisionChannels"),
			resizable: true
		});
	}
	
	getHTML(pOptions={}) {
		//randomID()
		let vChannels = game.settings.get(cModuleName, cSettingName);
		
		let vEntriesHTML = `<table>`;
		
		vEntriesHTML = vEntriesHTML+ 	`<tr style="border: 1px solid #dddddd">
											<th style="border: 1px solid #dddddd">${Translate(cWindowID + ".entries.titles." + "name")}</th>
											<th style="border: 1px solid #dddddd">${Translate(cWindowID + ".entries.titles." + "required")}</th>
											<th style="border: 1px solid #dddddd">${Translate(cWindowID + ".entries.titles." + "throughwalls")}</th>
											<th style="border: 1px solid #dddddd">${Translate(cWindowID + ".entries.titles." + "range")}</th>
											<th style="border: 1px solid #dddddd">${Translate(cWindowID + ".entries.titles." + "color")}</th>
											<th style="border: 1px solid #dddddd">${Translate(cWindowID + ".entries.titles." + "filter")}</th>
											<th style="border: 1px solid #dddddd">${Translate(cWindowID + ".entries.titles." + "transparency")}</th>
										</tr>`;
		
		for (let i = 0; i < 1; i++) {
			vEntriesHTML = vEntriesHTML + 	`	<tr>
													<td> <input type="text"> </td>
													<td style="text-align: center; width:100px"> <input type="checkbox"> </td>
													<td style="text-align: center; width:100px"> <input type="checkbox"> </td>
													<td style="width:50px"> <input type="number"> </td>
													<td style="text-align: center; width:50px"> <input type="color" style=""> </td>
													<td> 
														<select> 
														</select>
													</td>
													<td style="width:50px"> <input type="number"> </td>
												</tr>`;
		}
		
		vEntriesHTML = vEntriesHTML + `</table>`;
		
		//buttons	
		let vButtonsHTML = 				`<div class="form-group" style="display:flex;flex-direction:column;align-items:center;gap:1em;margin-top:1em">
											<button type="button" name="${cWindowID}.addchannel"> <i class="${cAddIcon}"></i> ${Translate(cWindowID + ".buttons.add.name")} </button>
											<button type="button" name="${cWindowID}.confirmchanges"> <i class="${cConfirmIcon}"></i> ${Translate(cWindowID + ".buttons.confirm.name")} </button>
										</div>`;
										
		return vEntriesHTML + vButtonsHTML;
	}
	
	getData(pOptions={}) {
		return {
			content: this.getHTML(pOptions)
		};
	}
	
	activateListeners(pHTML) {
		
		let vConfirmButton = pHTML.find(`button[name="${cWindowID}.confirmchanges"]`);
		
		vConfirmButton.on("click", () => {});
	}
	
	async _updateObject(pEvent, pData) {
	}	
	
	//DECLARATIONS
	
	//IMPLEMENTATIONS
}

function testwindow() {
	new VisionChannelsWindow().render(true);
}

Hooks.once("init", function() {
	game.settings.register(cModuleName, cSettingName, {
		name: Translate("Settings." + cSettingName + ".name"),
		hint: Translate("Settings." + cSettingName + ".descrp"),
		scope: "world",
		config: false,
		type: Object,
		default: {"000" : cDefaultChannel}
	});
	
	game.modules.get("perceptive").api.test = {testwindow};
});